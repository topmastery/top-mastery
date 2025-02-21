import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { IconBulb, IconUsers, IconTrophy, IconTarget } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -50px 0px",
    amount: 0.5 
  });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 45,
    stiffness: 100,
    mass: 0.5,
    restSpeed: 0.2,
    restDelta: 0.5
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.5,
        ease: [0.32, 0.72, 0, 1]
      });
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    let prevValue = 0;
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const currentValue = Math.floor(latest);
        if (currentValue !== prevValue) {
          (ref.current as HTMLElement).textContent = currentValue.toString();
          prevValue = currentValue;
          
          if (currentValue === value) {
            (ref.current as HTMLElement).classList.add('text-glow');
            setTimeout(() => {
              if (ref.current) {
                (ref.current as HTMLElement).classList.remove('text-glow');
              }
            }, 1000);
          }
        }
      }
    });
    return unsubscribe;
  }, [springValue, value]);

  return (
    <span 
      ref={ref} 
      className="text-primary font-bold transition-all duration-300 inline-block hover:scale-110"
      style={{ fontSize: '1.2em', willChange: 'transform' }}
    >
      0
    </span>
  );
};

const About = () => {
  const features = [
    {
      icon: <IconBulb size={40} />,
      title: 'رؤية إبداعية',
      description: 'نقدم حلولاً مبتكرة تجمع بين الإبداع والاحترافية لتحقيق أهدافك',
    },
    {
      icon: <IconUsers size={40} />,
      title: 'فريق محترف',
      description: 'نمتلك فريقاً من الخبراء المتخصصين في مختلف مجالات التصميم والتطوير',
    },
    {
      icon: <IconTrophy size={40} />,
      title: (
        <span className="inline-flex items-center gap-1">
          <span className="text-primary">+</span>
          <Counter value={20} />
          <span className="text-light group-hover:text-primary transition-colors duration-300"> عام خبرة</span>
        </span>
      ),
      description: 'نمتلك خبرة تمتد لأكثر من عشرين عاماً في مجال التصميم والتطوير الرقمي',
    },
    {
      icon: <IconTarget size={40} />,
      title: 'نتائج ملموسة',
      description: 'نركز على تحقيق نتائج ملموسة تتجاوز توقعات عملائنا',
    },
  ];

  return (
    <>
      <div className="about-section">
        <section id="about" className="py-section bg-dark-light relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent" />
          
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="section-title">من نحن</h2>
              <p className="section-subtitle">
                شركة رائدة في مجال التصميم والتطوير والتسويق الرقمي، نقدم حلولاً إبداعية متكاملة منذ تأسيسنا عام 2005 ومستمرين حتى الان والى اللانهاية
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary">مسيرة نجاح تمتد لعقدين</h3>
                <p className="text-light/80 leading-relaxed">
                  منذ تأسيسنا قبل أكثر من 20 عاماً، ونحن نسعى لتقديم أفضل الحلول الإبداعية لعملائنا. نؤمن بأن النجاح
                  يأتي من خلال الفهم العميق لاحتياجات العملاء وتقديم حلول مبتكرة تناسب تطلعاتهم.
                </p>
                <p className="text-light/80 leading-relaxed">
                  نفخر بفريقنا المحترف الذي يجمع بين الخبرة والإبداع، ونسعى دائماً لمواكبة
                  أحدث التقنيات والاتجاهات في مجال التصميم والتطوير. خلال مسيرتنا، نجحنا في تنفيذ مئات المشاريع
                  وكسب ثقة العديد من العملاء في مختلف القطاعات.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/about.webp"
                    alt="فريق العمل"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-60" />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group text-center p-8 rounded-lg bg-dark hover:bg-dark/80 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="text-primary mb-6 inline-block transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-light group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-light/80 group-hover:text-light/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
