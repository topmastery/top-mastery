import { validateQuestion, getRelevantContext, COMPANY_CONTEXT } from './aiContext';

export const getAIResponse = (question: string) => {
  // التحقق أولاً مما إذا كان السؤال يتعلق بشركتنا
  if (!validateQuestion(question)) {
    return {
      isRelevant: false,
      response: "عذراً، لا يمكنني الإجابة عن أسئلة لا تتعلق بشركة توب ماستري. هل يمكنني مساعدتك في شيء يخص خدماتنا؟"
    };
  }

  // الحصول على السياق المناسب للسؤال
  const context = getRelevantContext(question);

  // بناء الإجابة بناءً على السياق
  return {
    isRelevant: true,
    response: buildResponse(question, context),
    context: context
  };
};

const buildResponse = (question: string, context: any) => {
  // بناء إجابة مخصصة بناءً على نوع السؤال والسياق
  const { name, establishedYear, contact, services, about } = COMPANY_CONTEXT;

  if (question.includes("تواصل") || question.includes("اتصال")) {
    return `يمكنك التواصل مع ${name.ar} عبر:
    - الهاتف: ${contact.phone}
    - البريد الإلكتروني: ${contact.email}
    - العنوان: ${COMPANY_CONTEXT.location}`;
  }

  if (question.includes("خدمات")) {
    return `تقدم ${name.ar} مجموعة متكاملة من الخدمات تشمل:
    - ${services.design.title}
    - ${services.web.title}
    - ${services.marketing.title}`;
  }

  // إجابة افتراضية عامة
  return `${name.ar} هي ${about.summary}. تأسست عام ${establishedYear} ولديها خبرة ${COMPANY_CONTEXT.experience.years} عاماً في المجال.`;
};
