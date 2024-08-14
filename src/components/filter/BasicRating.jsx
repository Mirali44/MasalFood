import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { mealActions } from "../../store/meal-slice";
import { filtersActions } from "../../store/filter-slice";

export default function BasicRating() {
  const starCount = useSelector((state) => state.filters.starCount);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        marginTop: 20,
        marginBottom: 15,
      }}
    >
      <Typography style={{ marginRight: "5px", fontSize: 20 }}>
        Select Rating
      </Typography>
      <Rating
        name="simple-controlled"
        style={{ marginBottom: "5px" }}
        value={starCount}
        sx={{
          "& .MuiRating-icon": {
            color: "#ffb400",
          },
          "& .MuiRating-iconHover": {
            color: "#ffb400",
          },
        }}
        onChange={(event, newValue) => {
          dispatch(
            filtersActions.setStarCount({
              starCount: newValue,
            })
          );
          dispatch(
            mealActions.sortByRating({
              rating: newValue,
            })
          );
        }}
      />
    </Box>
  );
}
