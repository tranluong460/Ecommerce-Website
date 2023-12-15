import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/data/questions";

const QuestionsPage = () => {
  return (
    <section className="bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-foreground">
          Các câu hỏi thường gặp
        </h2>

        <Accordion type="single" collapsible>
          {questions.map((question, index) => (
            <AccordionItem key={question.label} value={`item-${index}`}>
              <AccordionTrigger className="text-muted-foreground">
                {index + 1}. {question.label}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {question.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default QuestionsPage;
