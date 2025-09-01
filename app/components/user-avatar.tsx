import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

import { UserIcon } from "lucide-react";

import { User } from "@prisma/client";

function UserAvatar({ user }: { user: Pick<User, "avatar"> }) {
  return (
    <Avatar>
      <AvatarImage src={user.avatar ?? ""} />
      <AvatarFallback>
        <UserIcon size={16} />
      </AvatarFallback>
    </Avatar>
  );
}

export { UserAvatar };
