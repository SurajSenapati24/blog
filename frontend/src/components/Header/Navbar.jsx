import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "../../context/ThemeProvider";
import { Share, SquarePen } from "lucide-react";
import { getNameInitials } from "../../utils/stringUtil";
import { useAuth } from "@/context/AuthContext";
import { Skeleton } from "../ui/skeleton";

const Navbar = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  // Add the Google Fonts import for Poppins
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    const fontAwesome = document.createElement('link');
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
    fontAwesome.rel = "stylesheet";
    document.head.appendChild(fontAwesome);
    
    const style = document.createElement('style');
    style.textContent = `
      * {
        font-family: 'Poppins', sans-serif;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontAwesome);
      document.head.removeChild(style);
    };
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="flex items-center justify-between p-5 sticky top-0 z-10 md:px-[60px] lg:px-[120px] lg:py-5 bg-[#ff7f00] text-white shadow-md font-poppins">
        <div className="flex items-center justify-center">
          <Link to="/" onClick={ScrollToTop} className="logo flex items-center font-bold text-2xl">
            <i className="fas fa-heartbeat text-white text-3xl mr-2"></i>
            <span className="RC text-2xl font-bold">RURALCARE</span>
          </Link>
        </div>
        
        {/* Navigation Menu - Visible on Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="hidden md:block">
            <ul className="flex">
              {[
                { name: 'HOME', path: '/blogs', active: true },
                { name: 'SERVICES', path: '/services', active: false },
                { name: 'BLOGS', path: '/', active: false },
                { name: 'CONTACT', path: '/contact', active: false },
                { name: 'ABOUT', path: '/about', active: false }
              ].map((item, index) => (
                <li key={index} className={`mx-4 relative ${item.active ? 'font-semibold' : ''}`}>
                  <Link 
                    to={item.path}
                    onClick={ScrollToTop}
                    className="text-white no-underline font-medium transition-all duration-300 text-sm py-2 px-1 block hover:text-amber-50 hover:translate-y-px group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-6">

          {/* Write Button - Only for logged in users */}
          {user && (
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/write" onClick={ScrollToTop} className="flex gap-2 text-white hover:text-amber-50 font-medium">
                <SquarePen strokeWidth={1.5} />
                Write
              </Link>
            </div>
          )}

          {/* User Authentication */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-7 w-7 md:h-9 md:w-9">
                  <AvatarImage
                    src={user.profilePicture}
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback>{getNameInitials(user.name)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-medium">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to="/dashboard">
                    <DropdownMenuItem onClick={ScrollToTop} className="font-normal">
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/profile">
                    <DropdownMenuItem onClick={ScrollToTop} className="font-normal">
                      Profile
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    logout();
                  }}
                  className="font-normal"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : loading ? (
            <Skeleton className="h-7 w-7 md:h-9 md:w-9 rounded-full" />
          ) : (
            <button onClick={() => navigate('/login')} className="bg-white text-orange-500 border-none py-2 px-5 rounded-lg font-bold cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5">
              LOGIN
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;