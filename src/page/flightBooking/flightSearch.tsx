// import { PersonOutline } from "@mui/icons-material";
// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// import {
//   Box,
//   Card,
//   CardContent,
//   Container,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { PlaneIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// export default function FlightSelector() {
//   const navigate = useNavigate();
//   const flights = [
//     {
//       id: 1,
//       departureTime: "7:05 AM",
//       arrivalTime: "8:55 PM",
//       departureAirport: "YUL",
//       arrivalAirport: "18:55",
//       layover: "1 layover: YYZ (3:55)",
//       airline: "Scoot",
//       price: 1300,
//     },
//     {
//       id: 2,
//       departureTime: "9:05 AM",
//       arrivalTime: "4:05 PM",
//       departureAirport: "YUL",
//       arrivalAirport: "YUL",
//       layover: "1 layover: YYZ (3:55)",
//       airline: "Scoot",
//       price: 1400,
//     },
//     {
//       id: 3,
//       departureTime: "9:05 AM",
//       arrivalTime: "4:55 PM",
//       departureAirport: "YUL",
//       arrivalAirport: "YUL",
//       layover: "1 layover: YYZ (3:55)",
//       airline: "Scoot",
//       price: 1300,
//     },
//   ];

//   return (
//     <Container>
//       <Box
//         sx={{ paddingTop: "20px", paddingBottom: "20px" }}
//         onClick={() => navigate(-1)}
//       >
//         <div className="bg-gray-100 rounded-full w-[40px] h-[40px] p-2 flex items-center justify-center">
//           <NavigateBeforeIcon className="text-[24px]" />
//         </div>
//       </Box>
//       <Stack direction={"row"} spacing={2}>
//         <Box>
//           <Stack
//             sx={{
//               width: "595px",
//               height: "80px",
//               padding: "10px 16px",
//               fontSize: "20px",
//               fontWeight: "400",
//               justifyContent: "center",
//               alignItems: "center",
//               marginBottom: "30px",
//               boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.115)",
//               borderRadius: "10px",
//             }}
//             direction={"row"}
//           >
//             <CalendarMonthOutlinedIcon sx={{ marginRight: "10px" }} />
//             Dec 16th, 2025
//           </Stack>
//           <Box>
//             {flights.map((flight) => (
//               <Card
//                 key={flight.id}
//                 sx={{
//                   boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.11115)",
//                   borderRadius: "30px",
//                   padding: "20px",
//                   position: "relative",
//                   marginBottom: "20px",
//                 }}
//                 className="flight-card"
//               >
//                 <CardContent>
//                   <Stack
//                     direction={"row"}
//                     spacing={2}
//                     sx={{
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Box>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         {flight.departureTime}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "23px",
//                           fontWeight: "500",
//                           color: "#6B7280",
//                         }}
//                       >
//                         {flight.departureAirport}
//                       </Typography>
//                     </Box>
//                     <Stack
//                       sx={{ justifyContent: "center", alignItems: "center" }}
//                     >
//                       <PlaneIcon />
//                       <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
//                         {flight.arrivalAirport}
//                       </Typography>
//                     </Stack>
//                     <Box sx={{ textAlign: "right" }}>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         {flight.arrivalTime}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "23px",
//                           fontWeight: "500",
//                           color: "#6B7280",
//                         }}
//                       >
//                         {flight.departureAirport}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                   <Stack
//                     direction={"row"}
//                     spacing={2}
//                     sx={{
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       marginTop: "10px",
//                     }}
//                   >
//                     <Box>
//                       <Typography
//                         sx={{
//                           fontSize: "16px",
//                           fontWeight: "400",
//                           color: "#6B7280",
//                         }}
//                       >
//                         {flight.layover}
//                       </Typography>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         {flight.airline}
//                       </Typography>
//                     </Box>
//                     <Box>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         $ {flight.price}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//         <Box>
//           <Stack
//             sx={{
//               width: "595px",
//               height: "80px",
//               padding: "10px 16px",
//               fontSize: "20px",
//               fontWeight: "400",
//               justifyContent: "center",
//               alignItems: "center",
//               marginBottom: "30px",
//               boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.115)",
//               borderRadius: "10px",
//             }}
//             direction={"row"}
//           >
//             <PersonOutline sx={{ marginRight: "10px" }} />
//             Jan 6th,2025
//           </Stack>
//           <Box>
//             {flights.map((flight) => (
//               <Card
//                 key={flight.id}
//                 sx={{
//                   boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.11115)",
//                   borderRadius: "30px",
//                   padding: "20px",
//                   position: "relative",
//                   marginBottom: "20px",
//                 }}
//                 className="flight-card"
//               >
//                 <CardContent>
//                   <Stack
//                     direction={"row"}
//                     spacing={2}
//                     sx={{
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Box>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         {flight.departureTime}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "23px",
//                           fontWeight: "500",
//                           color: "#6B7280",
//                         }}
//                       >
//                         {flight.departureAirport}
//                       </Typography>
//                     </Box>
//                     <Stack
//                       sx={{ justifyContent: "center", alignItems: "center" }}
//                     >
//                       <PlaneIcon />
//                       <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
//                         {flight.arrivalAirport}
//                       </Typography>
//                     </Stack>
//                     <Box sx={{ textAlign: "right" }}>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         {flight.arrivalTime}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: "23px",
//                           fontWeight: "500",
//                           color: "#6B7280",
//                         }}
//                       >
//                         {flight.departureAirport}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                   <Stack
//                     direction={"row"}
//                     spacing={2}
//                     sx={{
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       marginTop: "10px",
//                     }}
//                   >
//                     <Box>
//                       <Typography
//                         sx={{
//                           fontSize: "16px",
//                           fontWeight: "400",
//                           color: "#6B7280",
//                         }}
//                       >
//                         {flight.layover}
//                       </Typography>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         {flight.airline}
//                       </Typography>
//                     </Box>
//                     <Box>
//                       <Typography sx={{ fontSize: "23px", fontWeight: "500" }}>
//                         $ {flight.price}
//                       </Typography>
//                     </Box>
//                   </Stack>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//       </Stack>
//     </Container>
//   );
// }
