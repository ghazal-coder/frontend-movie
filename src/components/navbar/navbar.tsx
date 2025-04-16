import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { ModeToggle } from "../theme/mode-toggle";
import { cn } from "@/lib/utils";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink to="/">Home</HoveredLink>
        <HoveredLink to="/movies">All Movies</HoveredLink>
        <HoveredLink to="/aboutme">About Me</HoveredLink>
        {/* Add Privacy Policy link */}
        <HoveredLink to="/privacy-policy">Privacy Policy</HoveredLink> {/* New link */}

       
        
        <MenuItem setActive={setActive} active={active} item="Operation">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/add">Add New</HoveredLink>
          </div>
        </MenuItem>
        <ModeToggle />
        <HoveredLink to="/logout">Loug Out</HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
