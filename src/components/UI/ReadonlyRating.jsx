import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

// eslint-disable-next-line react/prop-types
export default function ReadonlyRating({ value }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}
