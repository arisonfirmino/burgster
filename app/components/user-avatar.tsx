import { cn } from "@/app/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

import { UserIcon } from "lucide-react";

import { User } from "@prisma/client";

interface UserAvatarProps {
  user: Pick<User, "avatar">;
  size?: string;
}

function UserAvatar({ user, size }: UserAvatarProps) {
  return (
    <Avatar className={cn(size ? size : "size-10")}>
      <AvatarImage src={user.avatar ?? ""} />
      <AvatarFallback>
        <UserIcon size={16} />
      </AvatarFallback>
    </Avatar>
  );
}

export { UserAvatar };
