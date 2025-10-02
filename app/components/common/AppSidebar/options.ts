import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
  Command
} from "lucide-vue-next"

export const options = {
  head: {
    title: 'Uninetworks',
    description: '',
    logo: Command
  },
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Дашборд",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Список",
      url: "#",
      icon: Bot,
    },
    {
      title: "Пользователи",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Отчеты",
      url: "#",
      icon: Settings2,
    },
  ],
}