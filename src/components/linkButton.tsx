"use client"

import { AllData } from "@/data/data"
import theme from "@/lib/theme"
import { Dialog, DialogActions, DialogContent, DialogTitle, ThemeProvider } from "@mui/material"
import { ChevronRight } from "lucide-react"
import React from "react"

interface LinkButtonAsset {
    name: string,
    link: string,
    uni: string,
    category: string
}

export default function LinkButton({ name ,uni, link, category }: LinkButtonAsset) {
    const [open, setOpen] = React.useState(false)
    const uniData = AllData[uni];
    const data = uniData ? uniData[category] : null;
    
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    if(!data) {
        return <p>Daten nicht gefunden für: {name} - {category} </p>
    }

    return(
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <div className="my-2 hover:cursor-pointer">
                    {/* <a href={link} target="_blank" rel="noopener noreferrer">
                    </a> */}
                    <div className="p-2 flex justify-between border border-neutral-900 rounded-md" onClick={handleClickOpen}>
                        <p className="font-bold text-neutral-900"> {name} </p>
                        <ChevronRight className="neutral-900" />
                    </div>
                </div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Gruppen in der Community <br/><span className="bg-[#04b851] text-[#ffffff] p-0.5 px-1">{name}</span></DialogTitle>
                    <DialogContent dividers={true}>
                            {data.map((item, index) => (
                                <div key={index} className="p-2 mb-4 flex justify-between border border-neutral-900 rounded-md">
                                        <p key={index} className="font-bold text-neutral-900"> {item} </p>
                                </div>
                            ))}
                    </DialogContent>
                    <DialogActions>
                        <div onClick={handleClose} className="m-1 hover:cursor-pointer"><span className="bg-[#ff0033] text-[#ffffff] p-1 px-1">Abbrechen</span></div>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="m-1">
                            <div><span className="bg-[#04b851] text-[#ffffff] p-1 px-1">Beitreten</span></div>
                        </a> 
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </ThemeProvider>
    )
}