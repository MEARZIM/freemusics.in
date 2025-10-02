import { Roboto_Mono } from "next/font/google";
import "@/styles/globals.css"
import { Metadata } from "next";

import { SidebarProvider } from "@/components/ui/sidebar";
import { MobileHeader } from "@/components/dashboard/mobile-header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import mockDataJson from "@/mock.json";
import type { MockData } from "@/types/dashboard";
import Widget from "@/components/dashboard/widget";
import Notifications from "@/components/dashboard/notifications";
// import { MobileChat } from "@/components/chat/mobile-chat";
// import Chat from "@/components/chat";

const mockData = mockDataJson as MockData;


const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false;

export const metadata: Metadata = {
  title: {
    template: `freemusics - %s Artists`,
    default: "freemusics - Artists",
  },
  description:
    "Discover and stream a vast collection of free music from independent artists around the world. Explore genres, create playlists, and enjoy high-quality audio without any cost.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    
      <SidebarProvider>
        {/* Mobile Header - only visible on mobile */}
        <MobileHeader mockData={mockData} />

        {/* Desktop Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-gap lg:px-sides">
          <div className="hidden lg:block col-span-2 top-0 relative">
            <DashboardSidebar />
          </div>
          <div className="col-span-1 lg:col-span-7">{children}</div>
          <div className="col-span-3 hidden lg:block">
            <div className="space-y-gap py-sides min-h-screen max-h-screen sticky top-0 overflow-clip">
              <div className="p-2">
                <Widget />
                <Notifications
                  initialNotifications={mockData.notifications}
                />

              </div>
              {/* <Chat /> */}
            </div>
          </div>
        </div>

        {/* Mobile Chat - floating CTA with drawer
            <MobileChat /> */}
      </SidebarProvider>

  );
}
