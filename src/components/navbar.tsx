"use client";

import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Share, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    }

    const handleShare = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Teile diesen Inhalt',
            text: 'Schau dir das an!',
            url: window.location.href,
          });
        } catch (error) {
          console.error('Error sharing:', error);
        }
      } else {
        // Fallback: URL in Zwischenablage kopieren
        navigator.clipboard.writeText(window.location.href);
        alert('Link wurde in die Zwischenablage kopiert!');
      }
    };

    const DrawerList = (
      <Box className="w-[250px]" role="presentation">
        <List className="justify-center">
          <ListItem className="self-end" disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <X />
            </ListItemButton>
          </ListItem >
          <ListItem key="home" disablePadding>
            <ListItemButton LinkComponent={Link} href="/" onClick={toggleDrawer(false)}>
              <ListItemText> Home </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="regeln" disablePadding>
            <ListItemButton LinkComponent={Link} href="/regeln" onClick={toggleDrawer(false)}>
              <ListItemText> Regeln </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="info" disablePadding>
            <ListItemButton LinkComponent={Link} href="/info" onClick={toggleDrawer(false)}>
              <ListItemText> Info für Fachschaften </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="kontakt" disablePadding>
            <ListItemButton LinkComponent={Link} href="/kontakt" onClick={toggleDrawer(false)}>
              <ListItemText> Kontakt </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem key="impressum" disablePadding>
            <ListItemButton LinkComponent={Link} href="/impressum" onClick={toggleDrawer(false)}>
              <ListItemText> Impressum </ListItemText>
            </ListItemButton>
          </ListItem>
       </List>
      </Box>
    )


    return(
    <div className="flex flex-row bg-neutral-900">
        <div className="basis-3/4 p-1 self-center"> 
          <Image src='/UniConnect_weiß.png' alt="logo" width="128" height="64"/>
        </div>
        <div className="basis-1/4 p-1">
          <div className="flex flex-row justify-end space-x-3">
            <div className="border rounded-md bg-white cursor-pointer">
              <Share className="m-1 p-0.5" size={32} color="black" onClick={handleShare}/>
            </div>
            <div className="border rounded">
                <Menu className="m-1 p-0.5" size={32} onClick={toggleDrawer(true)} />
                <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                  {DrawerList}
                </Drawer>
            </div>
          </div>
        </div>
      </div>
    )
}