import { motion } from "framer-motion";
import React from "react";
import { tinaField } from "tinacms/dist/react";

import { AboutBlocksTeam } from "@tina/__generated__/types";

export interface TeamProps {
  data: AboutBlocksTeam;
}

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "linkedin":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "x":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "dribbble":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.903 53.903 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
        </svg>
      );
    default:
      return null;
  }
};

const Team: React.FC<TeamProps> = ({ data }) => {
  const { eyebrow, title, description, members = [] } = data;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-primary/2">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-primary mb-4 flex items-center justify-center gap-2"
              data-tina-field={tinaField(data, "eyebrow")}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary/90"
            data-tina-field={tinaField(data, "title")}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground/90"
              data-tina-field={tinaField(data, "description")}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {members?.map(
            (member, index) =>
              member && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="group relative"
                  data-tina-field={tinaField(data.members?.[index])}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/30 rounded-3xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Image Container */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-[3/4] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        data-tina-field={tinaField(member, "image")}
                      />
                    ) : (
                      <div className="w-full aspect-[3/4] flex items-center justify-center bg-card">
                        <svg
                          className="w-16 h-16 text-muted-foreground/20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3
                      className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300"
                      data-tina-field={tinaField(member, "name")}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-base text-secondary/90 font-medium mb-4"
                      data-tina-field={tinaField(member, "role")}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-sm text-muted-foreground/80 mb-6 line-clamp-3"
                      data-tina-field={tinaField(member, "bio")}
                    >
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    {member.socialLinks && member.socialLinks.length > 0 && (
                      <div className="flex gap-4 justify-center">
                        {member.socialLinks
                          .filter((link): link is NonNullable<typeof link> =>
                            Boolean(link)
                          )
                          .map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground/60 hover:text-primary transition-colors duration-300"
                              data-tina-field={tinaField(link)}
                            >
                              <SocialIcon platform={link.platform} />
                            </a>
                          ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
