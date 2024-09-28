import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function VisionaryCard({ cardData }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: { sm : 360 , md:280}, boxShadow: 0 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={cardData.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "black",
            overflow: "hidden",
            textOverflow: "ellipsis", // Show "..." if text exceeds
            display: "-webkit-box",
            WebkitLineClamp: 4, // Limit to 3 lines
            WebkitBoxOrient: "vertical",
          }}
        >
          {cardData.description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button
          variant="contained"
          onClick={() => {
            // add readMoreLink here to navigate to the link
          }}
          sx={{
            backgroundColor: "#05386B !important", // Custom color with !important
            color: "#fff !important", // Text color
            "&:hover": {
              backgroundColor: "#05386B !important", // Hover state
            },
          }}
        >
          {`Read More...`}
        </Button>
      </CardActions>
    </Card>
  );
}
