import { Github, Mail, Globe } from 'lucide-react'

const team = [
  {
    name: 'Veles BH',
    role: 'Main Developer & Owner',
    image: 'https://media.discordapp.net/attachments/1284959665679237215/1316083020595462206/unnamed.jpg?ex=6759c153&is=67586fd3&hm=7b039f05ef24ef629a50d91e5c003737e7360f8b420d6c34eda861b1f0b26ed0&=&format=webp&width=648&height=648',
    bio: "Hi, I'm Veles BH. My favorite color is blue and I like coding, playing Minecraft, editing, recording, talking to people, owning Enzonic, and judging people.",
    links: { 
      github: 'https://github.com/velesbh/enzonic-web-2.0', 
      email: '#', 
      website: '#' 
    }
  },
  {
    name: 'Sawyer Plaz',
    role: 'CO-OWNER',
    image: 'https://media.discordapp.net/attachments/1284959665679237215/1316083020242882590/saywer.png?ex=6759c153&is=67586fd3&hm=a92e3a5db83f2896f94b253379093c622c78f3ad4b6420dc7c0bc5a34556e405&=&format=webp&quality=lossless&width=651&height=655',
    bio: "Hello, my name is Sawyer. I have a YT (SawyerPlaz). Don't upload much. Voice actor, co-owner, Director, programmer (Not too good though).",
    links: { github: '#', email: '#', website: '#' }
  },
  {
    name: 'LUKE',
    role: 'CO-OWNER',
    image: 'https://media.discordapp.net/attachments/1284959665679237215/1316083019848880218/luke.png?ex=6759c153&is=67586fd3&hm=d241672e07dce9368c48b4773b518aa8cad9410f709ea33ba6c6a405c621db24&=&format=webp&quality=lossless&width=655&height=655',
    bio: "Hi, I'm Luke. Voice Actor, Script Writer, and Actor for Enzonic Productions. My favorite things: Hazbin Hotel, Jujutsu Kaisen, and Technical Stuff.",
    links: { github: '#', email: '#', website: '#' }
  }
]

export function Team() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-black/30 backdrop-blur-lg rounded-lg p-6 hover:bg-black/40 transition-all duration-300">
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-emerald-400/30"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">{member.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                
                <div className="flex justify-center gap-4 text-gray-400">
                  <a 
                    href={member.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={member.links.email} 
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href={member.links.website} 
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
