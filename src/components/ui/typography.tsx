import * as React from "react"
import { cn } from "@/lib/utils"

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-3xl font-extrabold tracking-tight text-balance",
                className
            )}
            {...props}
        />
    )
}

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                "mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        />
    )
}

export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    )
}

export function H4({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    )
}

export function P({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("leading-6 [&:not(:first-child)]:mt-5", className)}
            {...props}
        />
    )
}

export function Blockquote({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
    return (
        <blockquote
            className={cn("mt-6 border-l-2 pl-6 italic text-base", className)}
            {...props}
        />
    )
}

export function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement | HTMLOListElement>) {
    return (
        <ul
            className={cn("my-5 ml-6 list-disc [&>li]:mt-1 text-base", className)}
            {...props}
        />
    )
}

export function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
    return (
        <div className="my-5 w-full overflow-y-auto">
            <table className={cn("w-full text-base", className)} {...props} />
        </div>
    )
}

export function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <code
            className={cn(
                "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                className
            )}
            {...props}
        />
    )
}

export function Lead({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-muted-foreground text-lg", className)} {...props} />
    )
}

export function Large({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("text-base font-semibold", className)} {...props} />
}

export function Small({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <small className={cn("text-xs leading-none font-medium", className)} {...props} />
    )
}

export function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-muted-foreground text-xs", className)} {...props} />
    )
} 