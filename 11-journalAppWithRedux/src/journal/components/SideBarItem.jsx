import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";



export const SideBarItem = ( { title = '', body, id } ) => {

    const newTitle = useMemo( () => {
        return title.length > 17 // esto es para que no se corte el título de la página slavo si es mayor a 17 caracteres, si es así, le pondrá 3 puntos
            ? title.substring(0,17) + '...'
            : title;
    }, [ title ])

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot/>
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title}/>
                    <ListItemText secondary={body}/>
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

