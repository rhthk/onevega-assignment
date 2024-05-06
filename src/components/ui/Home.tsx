"use client";
import { useState } from "react";
import moment from "moment";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import DATA from "@/data/bfc-boards.json";
import PROMPTS from "@/data/prompts.json";

export default function Home({ BOARDS, PROMPT }: { BOARDS: any; PROMPT: any }) {
  const [Case, setCase] = useState<string>("");
  const CASE = DATA.boards.find((v) => v.name === Case);

  return (
    <main className="grid h-screen w-screen">
      <div className="m-auto">
        <div className="flex gap-1 mb-4">
          <Select onValueChange={(e) => setCase(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Use Case" />
            </SelectTrigger>
            <SelectContent>
              {DATA.boards.map((v, i) => (
                <SelectItem key={i} value={v.name}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Prompt" />
            </SelectTrigger>
            <SelectContent>
              {PROMPTS.map((v, i) => (
                <SelectItem key={i} value={v.name}>
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {CASE && (
          <Card className="hover:scale-105 transition ease-in-out">
            <CardHeader>
              <CardTitle>{CASE.name}</CardTitle>
              <CardDescription>
                {moment().diff(CASE.createdAt, "day")} days ago
              </CardDescription>
            </CardHeader>
            <CardContent>
              {CASE.bcfs.map((v, i) => (
                <>
                  <div className="p-4 flex flex-col">
                    <p>{v.name}</p>
                    <p className="text-sm">
                      {moment().diff(v.createdAt, "day")} days ago
                      {/* {moment(v.createdAt).format("DD-MM-YYYY HH:mm:ss")} */}
                    </p>
                    <p className="flex gap-1">
                      {v.bcfBoards.map((j) => (
                        <Badge key={j.id} variant="secondary">
                          {j.name}
                        </Badge>
                      ))}
                    </p>
                  </div>
                  <Separator />
                </>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
