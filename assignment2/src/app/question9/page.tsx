"use client"
import ThemeSwitcherApplication from "@/components/ThemeSwitcherApplication";
import { ThemeProvider } from "@/context/ThemeContext";


function page() {
    return (

        <div>
            <ThemeProvider>
               <ThemeSwitcherApplication/>
            </ThemeProvider>
        </div>
      );
}

export default page;