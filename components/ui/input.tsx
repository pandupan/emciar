import * as React from "react";
import { cn } from "@/lib/utils";
import { AiOutlineSearch } from "react-icons/ai";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="flex items-center h-10 w-full border border-input bg-gray-100 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <input
            type={type}
            className={cn(
              "flex-1 appearance-none bg-transparent border-none w-full text-sm font-medium placeholder-text-muted-foreground focus:outline-none",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        <span
          className="absolute inset-y-0 right-3 flex items-center pointer-events-none bg-blue-500 rounded"
          style={{ height: "calc(100% - 0.5rem)", width: "2rem", top: "50%", transform: "translateY(-50%)" }}
          aria-hidden="true"
        >
          <AiOutlineSearch className="text-white mx-auto" />
        </span>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
