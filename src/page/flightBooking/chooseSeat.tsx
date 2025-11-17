// // SeatSelector.tsx

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Container,
//   Stack,
// } from "@mui/material";
// import {Grid} from "@mui/material";
// type SeatStatus = "available" | "selected" | "unavailable";
// type SeatsMap = Record<number, SeatStatus>;

// const SeatSelector = () => {
//   const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

//   const [seats, setSeats] = useState<SeatsMap>({
//     1: "available",
//     2: "available",
//     3: "unavailable",
//     4: "available",
//     5: "available",
//     6: "selected",
//     7: "available",
//     8: "available",
//     9: "available",
//     10: "available",
//     11: "available",
//     12: "available",
//     13: "available",
//     14: "available",
//     15: "available",
//     16: "available",
//     17: "available",
//     18: "available",
//     19: "available",
//     20: "available",
//     21: "available",
//     22: "available",
//     23: "available",
//     24: "available",
//     25: "available",
//     26: "available",
//     27: "available",
//     28: "available",
//     29: "available",
//     30: "available",
//   });

//   const handleSelectSeat = (seatNumber: number) => {
//     if (seats[seatNumber] === "unavailable") return;

//     if (selectedSeat !== null && selectedSeat !== seatNumber) {
//       setSeats((prev) => ({
//         ...prev,
//         [selectedSeat]: "available",
//       }));
//     }

//     setSeats((prev) => ({
//       ...prev,
//       [seatNumber]: "selected",
//     }));

//     setSelectedSeat(seatNumber);
//   };

//   const ticketPrice = 150.0;
//   const totalPrice = selectedSeat ? ticketPrice : 0;

//   return (
//     <Container maxWidth="lg" sx={{ py: 6 }}>
//       <Box sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
//         {/* صورة الطائرة (جانب أيسر) */}
//         <Paper
//           elevation={0}
//           sx={{
//             width: 300,
//             height: 400,
//             borderRadius: 3,
//             bgcolor: "grey.50",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             overflow: "hidden",
//           }}
//         >
//           <Typography variant="h6" color="text.secondary" align="center">
//             🛩️ Airplane Layout
//           </Typography>
//           {/* يمكنك استبدال هذا بـ <img src="..." alt="Airplane" /> لاحقًا */}
//         </Paper>

//         {/* مخطط المقاعد (جانب أيمن) */}
//         <Box sx={{ flex: 1 }}>
//           <Typography variant="h5" fontWeight="bold" mb={2}>
//             Choose seat
//           </Typography>

//           {/* مفتاح الألوان */}
//           <Stack direction="row" spacing={3} mb={3}>
//             {[
//               { label: "Available", color: "primary.main" },
//               { label: "Selected", color: "success.main" },
//               { label: "Un available", color: "grey.300" },
//             ].map((item) => (
//               <Box
//                 key={item.label}
//                 sx={{ display: "flex", alignItems: "center", gap: 1 }}
//               >
//                 <Box
//                   sx={{
//                     width: 12,
//                     height: 12,
//                     borderRadius: "50%",
//                     bgcolor: item.color,
//                   }}
//                 />
//                 <Typography variant="caption">{item.label}</Typography>
//               </Box>
//             ))}
//           </Stack>

//           {/* شبكة المقاعد */}
//           <Grid container spacing={1} sx={{ mb: 3 }}>
//             {Array.from({ length: 30 }, (_, i) => i + 1).map((seatNumber) => {
//               const status = seats[seatNumber];
//               let bgcolor = "grey.200";
//               let color = "text.secondary";

//               if (status === "available") {
//                 bgcolor = "primary.main";
//                 color = "white";
//               } else if (status === "selected") {
//                 bgcolor = "success.main";
//                 color = "white";
//               }

//               return (
//                 <Grid xs={4} sm={2} key={seatNumber}>
//                   <Button
//                     onClick={() => handleSelectSeat(seatNumber)}
//                     disabled={status === "unavailable"}
//                     sx={{
//                       width: "100%",
//                       height: 50,
//                       bgcolor,
//                       color,
//                       textTransform: "none",
//                       fontSize: "0.875rem",
//                       fontWeight: "medium",
//                       borderRadius: 1,
//                       "&:hover": {
//                         bgcolor:
//                           status === "available"
//                             ? "primary.dark"
//                             : status === "selected"
//                             ? "success.dark"
//                             : "grey.300",
//                       },
//                       "&:disabled": {
//                         bgcolor: "grey.200",
//                         color: "text.secondary",
//                         cursor: "not-allowed",
//                       },
//                     }}
//                   >
//                     {seatNumber}
//                   </Button>
//                 </Grid>
//               );
//             })}
//           </Grid>

//           {/* ملخص السعر */}
//           <Box
//             sx={{
//               p: 3,
//               bgcolor: "grey.50",
//               borderRadius: 2,
//               mb: 3,
//             }}
//           >
//             <Stack spacing={1}>
//               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                 <Typography variant="body2">Ticket price</Typography>
//                 <Typography variant="body2">
//                   ${ticketPrice.toFixed(2)}
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                 <Typography variant="body2">Total Price</Typography>
//                 <Typography variant="body2" color="primary" fontWeight="bold">
//                   ${totalPrice.toFixed(2)}
//                 </Typography>
//               </Box>
//               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//                 <Typography variant="body2">Your Seat</Typography>
//                 <Typography variant="body2">{selectedSeat ?? "-"}</Typography>
//               </Box>
//             </Stack>
//           </Box>

//           {/* زر الاستمرار */}
//           <Button
//             fullWidth
//             variant="contained"
//             size="large"
//             disabled={!selectedSeat}
//             onClick={() => {
//               if (selectedSeat) {
//                 alert(`Proceeding with seat ${selectedSeat}`);
//                 // هنا تروح على الصفحة الجاية
//               }
//             }}
//             sx={{
//               py: 1.5,
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//           >
//             Continue
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SeatSelector;
