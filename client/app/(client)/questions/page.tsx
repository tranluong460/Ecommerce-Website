import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/data/questions";
import "@/styles/client/questions.css";

const QuestionsPage = () => {
  return (
    <section className="qs-section">
      <Container>
        <h2 className="qs-h2">Các câu hỏi thường gặp</h2>

        <Accordion type="single" collapsible>
          {questions.map((question, index) => (
            <AccordionItem key={question.label} value={`item-${index}`}>
              <AccordionTrigger className="qs-at">
                {index + 1}. {question.label}
              </AccordionTrigger>
              <AccordionContent className="qs-ac">
                {question.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default QuestionsPage;
