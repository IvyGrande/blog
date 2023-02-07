import React from "react";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";

export const ArticleCard = (props) => {
    return (
        <div className="card">
            <Card>
                <CardActionArea>
                    <CardContent>
                        <h1>{props.list.title}</h1>
                        <Typography variant="body2" color="text.secondary">
                            {props.list.summary}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}