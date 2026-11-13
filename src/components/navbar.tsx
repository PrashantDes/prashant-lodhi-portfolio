import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Portal as TooltipPortal } from "@radix-ui/react-tooltip";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <Dock className="portfolio-dock z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 transform-gpu">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href} data-dock-icon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-7 sm:size-12 focus-visible:bg-accent"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent side="top" sideOffset={8} className="dock-tooltip">
                  <p>{item.label}</p>
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-6" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar && social.url)
          .map(([name, social]) => (
            <DockIcon key={name} data-dock-icon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-7 sm:size-12 focus-visible:bg-accent"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent side="top" sideOffset={8} className="dock-tooltip">
                    <p>{name}</p>
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-6" />
        <DockIcon data-dock-icon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle className="focus-visible:bg-accent" />
            </TooltipTrigger>
            <TooltipPortal>
              <TooltipContent side="top" sideOffset={8} className="dock-tooltip">
                <p>Theme</p>
              </TooltipContent>
            </TooltipPortal>
          </Tooltip>
        </DockIcon>
      </Dock>
    </nav>
  );
}
