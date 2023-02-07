import React from "react";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

export const MainPart = () => {
    return (
        <div className="card">
            <Card>
                <CardActionArea>
                    <CardContent>
                        <h1>hello,world</h1>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}