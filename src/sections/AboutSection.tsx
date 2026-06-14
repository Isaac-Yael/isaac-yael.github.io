import { motion } from 'framer-motion'
import { GradientLine } from '../components/GradientLine'

const STATS = [
  { value: '8+', label: 'Años de experiencia' },
  { value: 'UNAM', label: 'Diseño y Comunicación Visual' },
  { value: 'BCN', label: 'Barcelona, España' },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden"
      
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '-5%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(100, 30, 200, 0.09) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-3xl aspect-[3/4] max-w-sm mx-auto lg:mx-0">
            <img
              src="/images/collections/retratos/11.png"
              alt="Isaac Ruiz"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{ background: 'linear-gradient(to top, #07060F, transparent)' }}
            />
          </div>
          <div className="mt-5 max-w-sm mx-auto lg:mx-0">
            <GradientLine thickness={3} />
          </div>
        </motion.div>

        {/* Right: Text */}
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/55 font-light mb-3">
              Sobre mí
            </p>
            <h2
              className="font-bold uppercase text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 6rem)' }}
            >
              ISAAC<br />RUIZ
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ originX: 0 }}
            className="max-w-[180px]"
          >
            <GradientLine thickness={2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 text-white/65 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.85rem, 1.3vw, 0.98rem)' }}
          >
            <p>
              Soy Content Creator, diseñador visual y productor audiovisual mexicano,
              actualmente radicado en Barcelona, España.
            </p>
            <p>
              Durante los últimos 8 años he desarrollado proyectos enfocados en
              la creación de contenido visual, combinando diseño, fotografía, video
              y estrategias digitales para ayudar a marcas y empresas a comunicar
              de manera efectiva.
            </p>
            <p>
              Mi enfoque se basa en crear contenido que no solo se vea bien, sino
              que conecte con las audiencias, fortalezca la identidad de marca y
              genere resultados medibles.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-bold text-white text-xl md:text-2xl">{s.value}</span>
                <span className="text-white/45 text-xs font-light leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
