"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import App from "../Dashboard/layout/sidebar/Sidebar";
import RootLayout from '../Dashboard/layout'; 


export default function Create() {


  const [projectName, setProjectName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get user_id from session
    const { data: { session } = {} } = await supabase.auth.getSession();
    const user_id = session?.user.id;

    // Insert project data into the database
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          project_name: projectName,
          first_name: firstName,
          last_name: lastName,
          email,
          user_id,
        },
      ])
      .single();

    console.log("Submitted");

    if (error) {
      console.error(error);
    } else {
      router.push(`/upload?projectName=${projectName}`);
    }
  };

  return (
    <RootLayout>
    <div className="flex max-h-screen">
      {/* <App 
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={handleSidebarClose}
      /> */}
      <div className="flex-grow relative max-w-md w-full max-h-[70vh] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border-2 border-black">
        <h2 className="font-bold text-2xl text-black">Welcome to FreeESG</h2>
        <p className="text-neutral-600 text-lg max-w-sm mt-2">
          Fill The Information & Upload The Docs:
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="projectname" className="text-black">
              Project Name
            </Label>
            <Input
              id="projectname"
              placeholder="Your Project Name e.g.'ML Nagpur'"
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-black">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-black">
                First name
              </Label>
              <Input
                id="firstname"
                placeholder="Prasanna"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-black">
                Last name
              </Label>
              <Input
                id="lastname"
                placeholder="Muppidwar"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-black">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="contact.mlnagpur@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-800 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)inset,0px-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            <p className="text-white">Submit & Proceed &rarr;</p>
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  </RootLayout>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
