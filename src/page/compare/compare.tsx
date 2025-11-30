import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Back from "../../components/back";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { fetchSearchById } from "../../store/compareSlice";

export default function Compare() {
  const [search, setSearch] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [erLo, seterLo] = useState("");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const navigate = useNavigate();
  const compareSectionRef = useRef<HTMLDivElement | null>(null);
  const continueButtonRef = useRef<HTMLButtonElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.compare
  );

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(fetchSearchById(debouncedQuery));
    }
  }, [debouncedQuery]);

  // Error / loading / no results
  useEffect(() => {
    if (loading) {
      seterLo("Loading...");
    } else if (error) {
      seterLo(error);
    } else if (
      Array.isArray(product) &&
      product.length === 0 &&
      debouncedQuery !== ""
    ) {
      seterLo("No results found");
    } else {
      seterLo("");
    }
  }, [loading, error, product, debouncedQuery]);

  // Click outside to deselect card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        continueButtonRef.current &&
        continueButtonRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (
        compareSectionRef.current &&
        !compareSectionRef.current.contains(event.target as Node)
      ) {
        setSelectedCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container>
      {/* Search Bar */}
      <Stack direction="row" alignItems="center" mb={3}>
        <Back />
        <Box sx={{ ml: 2, width: "100%" }}>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: <Search sx={{ color: "blue" }} />,
            }}
            sx={{
              background: "#fff",
              borderRadius: "15px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
            }}
          />
          {erLo && (
            <Typography
              sx={{
                color: error ? "red" : "black",
                mt: 1,
                ml: 1,
                fontSize: "14px",
              }}
            >
              {erLo}
            </Typography>
          )}
        </Box>
      </Stack>

      {/* Loader */}
      {loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            mb: 3,
          }}
        >
          <CircularProgress size={50} thickness={4} color="primary" />
          <Typography sx={{ mt: 2, fontSize: "16px" }}>
            Searching for tours...
          </Typography>
        </Box>
      )}

      {/* Results cards */}
      <Grid container spacing={2}>
        {Array.isArray(product) &&
          product.length > 0 &&
          product.map((item: any) => (
            <Grid size={{xs:12, md:6}} key={item.id}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: 20,
                  backgroundColor: "#FAFAFA",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <CardMedia
                      component="img"
                      image={item.main_image}
                      alt={item.name}
                      sx={{
                        width: { xs: "103px", md: "170px" },
                        height: { xs: "103px", md: "170px" },
                        objectFit: "cover",
                        flexShrink: 0,
                        mb: 1,
                      }}
                    />
                    <Box sx={{ flex: 1, overflow: "hidden" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "15px", md: "24px" },
                          fontWeight: "500",
                          lineHeight: 1.3,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#6B7280",
                          fontSize: { xs: "13px", md: "22px" },
                          fontWeight: "400",
                          mt: 0.5,
                        }}
                      >
                        {item.time_start} | <span>{item.price_per_person}</span>
                      </Typography>
                      <Typography
                        sx={{
                          color: "#6B7280",
                          fontSize: { xs: "13px", md: "22px" },
                          fontWeight: "400",
                          mt: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {item.short_description}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* Compare Section */}
      <Box sx={{ mt: 8 }}>
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: "500",
            mb: 3,
            display:
              !loading &&
              !error &&
              Array.isArray(product) &&
              product.length === 0
                ? "none"
                : "block",
          }}
        >
          Compare
        </Typography>

        <Box ref={compareSectionRef}>
          <Grid container spacing={2}>
            {Array.isArray(product) &&
              product.length > 0 &&
              product.map((i: any) => {
                const isSelected = selectedCard === i.id;
                return (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    key={i.id}
                    onClick={() => setSelectedCard(i.id)}
                    sx={{ cursor: "pointer", display: "flex" }}
                  >
                    <Card
                      sx={{
                        borderRadius: "20px",
                        backgroundColor: "#FAFAFA",
                        border: isSelected ? "2px solid #1C64F2" : "none",
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                      }}
                    >
                      <CardContent sx={{ padding: "20px" }}>
                        <Typography
                          sx={{ fontSize: "20px", fontWeight: "500" }}
                        >
                          {i.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#6B7280",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "40px",
                              fontWeight: "normal",
                              color: "black",
                            }}
                          >
                            {i.price_per_person}
                          </span>
                          /person
                        </Typography>
                        {i.highlights.map((item: any, idx: number) => (
                          <Typography
                            key={idx}
                            sx={{
                              fontSize: { xs: "14px", md: "18px" },
                              fontWeight: "400",
                              mt: 1,
                            }}
                          >
                            ✔ {item}
                          </Typography>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Box>

        {/* Continue Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 8,
          }}
        >
          <Button
            ref={continueButtonRef}
            variant="contained"
            disabled={!selectedCard}
            onClick={() => {
              if (!selectedCard) {
                alert("Please select a tour before continuing.");
                return;
              }
              navigate("/paymentpage");
            }}
            sx={{
              backgroundColor: "#1E429F",
              fontSize: "20px",
              fontWeight: "600",
              padding: "8px 16px",
              width: { xs: "100%", md: "605px" },
              textTransform: "none",
            }}
          >
            Check Out
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
