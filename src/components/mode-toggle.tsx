"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import * as React from "react";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      className,
      onClick,
      type = "button",
      "aria-label": ariaLabel = "Toggle color theme",
      ...props
    },
    ref
  ) => {
    const { theme, setTheme } = useTheme();

    return (
      <Button
        {...props}
        ref={ref}
        variant="ghost"
        type={type}
        aria-label={ariaLabel}
        size="icon"
        className={cn("px-2", className)}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            setTheme(theme === "dark" ? "light" : "dark");
          }
        }}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
    );
  }
);

ModeToggle.displayName = "ModeToggle";
