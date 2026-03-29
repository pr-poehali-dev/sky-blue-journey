import { Badge } from "@/components/ui/badge"
import ChessBoard from "./ChessBoard"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">⚡ Простая механика</Badge>,
    title: "Ты и Робот.",
    showButton: true,
    buttonText: 'Начать',
    customContent: <ChessBoard />
  },
  {
    id: 'about',
    title: 'Всё просто.',
    content: 'Ты пишешь — робот делает. Никакой магии, только чёткая механика взаимодействия человека и ИИ.'
  },
  {
    id: 'features',
    title: 'Ты говоришь.',
    content: 'Формулируй задачу как угодно — словами, идеями, набросками. Робот поймёт и возьмётся за дело.'
  },
  {
    id: 'testimonials',
    title: 'Робот делает.',
    content: 'Пока ты думаешь о следующем шаге — робот уже работает. Быстро, точно, без устали.'
  },
  {
    id: 'join',
    title: 'Вместе — быстрее.',
    content: 'Ты и робот — идеальный тандем. Человеческая интуиция плюс машинная скорость.',
    showButton: true,
    buttonText: 'Попробовать'
  },
]