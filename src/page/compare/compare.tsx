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
} from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Back from "../../components/back";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Compare() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const navigate = useNavigate();
  const compareSectionRef = useRef<HTMLDivElement | null>(null);
  const continueButtonRef = useRef<HTMLButtonElement | null>(null);

  const result = [
    {
      id: "1",
      image: "/assets/coompare/Depth 3, Frame 0 (1).png",
      title: "Paris  Evening Cruise",
      price: "$75",
      time: "6:00 PM - 9:00 PM",
      dec: "Enjoy a romantic evening cruise in Paris.",
    },
    {
      id: "2",
      image: "/assets/coompare/Depth 3, Frame 0 (3).png",
      title: "Iconic Paris Tour",
      price: "$50",
      time: "10:00 AM - 1:00 PM",
      dec: "Explore Paris's iconic landmarks and hidden gems in Paris.",
    },
    {
      id: "3",
      image: "/assets/coompare/Depth 3, Frame 0 (2).png",
      title: "Paris Art & Culture Tour",
      price: " $60",
      time: "2:00 PM - 5:00 PM",
      dec: "Discover Paris's artistic side with visits to renowned museums in Paris.",
    },
    {
      id: "4",
      image: "/assets/coompare/Depth 3, Frame 0 (4).png",
      title: "Paris Historical Sites",
      price: "$45",
      time: "9:00 AM - 12:00 PM",
      dec: "Explore the historic heart of Paris, including Notre Dame and the Latin Quarter in Paris.",
    },
    {
      id: "5",
      image: "/assets/coompare/Depth 3, Frame 0 (5).png",
      title: "Paris Louvre Museum Tour",
      time: "1:00 PM - 4:00 PM",
      price: " $55",
      dec: "A guided tour of the Louvre Museum, showcasing Paris's art ",
    },
    {
      id: "6",
      image: "/assets/coompare/Depth 3, Frame 0 (5).png",
      title: "Paris  Evening Cruise",
      price: " $75",
      time: "6:00 PM - 9:00 PM",
      dec: "Enjoy a romantic evening cruise in Paris.",
    },
  ];

  const comp = [
    {
      id: "1",
      title: "Paris  Evening Cruise",
      price: "$75",
      dec: [
        "Duration: 3 hours.",
        "Highlights: Evening cruise.",
        "Availability: Available.",
        "Guide: Local guide.",
        "Transportation: Boat.",
      ],
    },
    {
      id: "2",
      title: "Iconic Paris Tour",
      price: "$50",
      dec: [
        "Duration: 3 hours.",
        "Highlights: Eiffel Tower, Louvre.",
        "Availability: Available.",
        "Guide: Expert guide.",
        "Transportation: Walking + Metro.",
      ],
    },
    {
      id: "3",
      title: "Paris Art & Culture Tour",
      price: "$60",
      dec: [
        "Duration: 3 hours.",
        "Highlights: Musée d'Orsay, Montmartre.",
        "Availability: Available.",
        "Guide: Art historian.",
        "Transportation: Walking.",
      ],
    },
    {
      id: "4",
      title: "Paris Historical Sites",
      price: "$45",
      dec: [
        "Duration: 3 hours.",
        "Highlights: Notre Dame, Latin Quarter.",
        "Availability: Available.",
        "Guide: Local historian.",
        "Transportation: Walking.",
      ],
    },
    {
      id: "5",
      title: "Paris Louvre Museum Tour",
      price: "$55",
      dec: [
        "Duration: 3 hours.",
        "Highlights: Mona Lisa, Venus de Milo.",
        "Availability: Available.",
        "Guide: Certified museum guide.",
        "Transportation: Walking.",
      ],
    },
    {
      id: "6",
      title: "Seine River Dinner Cruise",
      price: "$85",
      dec: [
        "Duration: 2.5 hours.",
        "Highlights: Gourmet dinner, live music.",
        "Availability: Limited seats.",
        "Guide: None (dining experience).",
        "Transportation: Luxury boat.",
      ],
    },
  ];

  // إغلاق الاختيار عند الضغط خارج منطقة المقارنة
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // إذا كان الضغط على الزر → لا تمسح الاختيار
      if (
        continueButtonRef.current &&
        continueButtonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      // إذا كان الضغط خارج منطقة المقارنة → امسح الاختيار
      if (
        compareSectionRef.current &&
        !compareSectionRef.current.contains(event.target as Node)
      ) {
        setSelectedCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      {/* شريط البحث */}
      <Stack direction="row" alignItems="center" mb={3}>
        <Back />
        <TextField
          fullWidth
          InputProps={{
            startAdornment: <Search sx={{ color: "blue" }} />,
          }}
          sx={{
            marginLeft: "10px",
            background: "#fff",
            borderRadius: "15px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
            },
          }}
        />
      </Stack>

      {/* البطاقات العلوية */}
      <Grid container spacing={2}>
        {result.map((item) => (
          <Grid size={{ xs: 12,sm: 6 }} key={item.id}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: 20,
                backgroundColor: "#FAFAFA",
                height: { xs: 119, md: 202 }, // 👈 ارتفاع ثابت
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <Stack direction="row" alignItems="flex-start" spacing={2}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      width: { xs: "103px", md: "170px" },
                      height: { xs: "103px", md: "170px" },
                      objectFit: "cover",
                      flexShrink: 0, 
                      marginBottom:"7px"
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
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6B7280",
                        fontSize: { xs: "13px", md: "22px" },
                        fontWeight: "400",
                        mt: 0.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.time} | <span>{item.price}</span>
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6B7280",
                        fontSize: { xs: "13px", md: "22px" },
                        fontWeight: "400",
                        mt: 0.5,
                        lineHeight: 1.4,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.dec}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* قسم المقارنة */}
      <Box sx={{ marginTop: "50px" }}>
        <Typography
          sx={{ fontSize: "26px", fontWeight: "500", marginBottom: "20px" }}
        >
          Compare
        </Typography>

        {/* الحاوية الرئيسية التي نستخدمها للـ ref */}
        <Box ref={compareSectionRef}>
          <Grid container spacing={2}>
            {comp.map((i) => {
              const isSelected = selectedCard === i.id;
              return (
                <Grid
                  size={{ xs: 12, md: 6, lg: 4 }}
                  key={i.id}
                  onClick={() => setSelectedCard(i.id)}
                  sx={{ cursor: "pointer" }}
                >
                  <Card
                    sx={{
                      borderRadius: "20px",
                      backgroundColor: "#FAFAFA",
                      border: isSelected ? "2px solid #1C64F2" : "none",
                    }}
                  >
                    <CardContent sx={{ padding: "20px" }}>
                      <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                        {i.title}
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
                          {i.price}
                        </span>
                        /person
                      </Typography>
                      {i.dec.map((item, idx) => (
                        <Typography
                          key={idx}
                          sx={{ fontSize: "18px", fontWeight: "400", mt: 1 }}
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

        {/* زر الاستمرار */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
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
