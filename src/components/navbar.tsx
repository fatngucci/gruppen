"use client";

import { Box, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { Share, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    }

    const DrawerList = (
      <Box className="w-[250px]" role="presentation">
        <List className="justify-center">
          <ListItem className="self-end" disablePadding>
            <ListItemButton onClick={toggleDrawer(false)}>
              <X />
            </ListItemButton>
          </ListItem >
          <ListItem key="home" disablePadding>
            <ListItemButton>
              <Link href="/" className=""> Home </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key="regeln" disablePadding>
            <ListItemButton>
              <Link href="/regeln"> Regeln </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key="kontakt" disablePadding>
            <ListItemButton>
              <Link href="/kontakt"> Kontakt </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key="info" disablePadding>
            <ListItemButton>
              <Link href="/info"> Info für Fachschaften </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key="impressum" disablePadding>
            <ListItemButton>
              <Link href="/impressum"> Impressum </Link>
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
            <div className="border rounded-md bg-white">
              <Share className="m-1 p-0.5" size={32} color="black"/>
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