import React from 'react';
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header';

export default function Resume() {
  return (
    <div>
      <Header />
      <Container sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          My Resume
        </Typography>
        
        {/* EXPERIENCE SECTION */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Experience
          </Typography>

          {/* Florida Blue/GuideWell: Associate IT Developer */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                Florida Blue/GuideWell: Associate IT Developer{" "}
                <Typography variant="caption" color="text.secondary">
                  (June 2024 – Present)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Designed, developed, and maintained full-stack applications using React and Node.js/Express/Go." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Built and integrated RESTful APIs to facilitate efficient client-server communication." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Deployed applications using Jenkins, GitLab, and OpenShift within a robust CI/CD pipeline, ensuring streamlined code integration, automated testing, and seamless deployment." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Provided production support for a tier 1 application with 5000+ users by resolving incident tickets and coordinating solutions with cross-functional teams." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Authored comprehensive technical documentation for codebases, APIs, and integrations to support knowledge sharing across teams." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Florida Blue/GuideWell: Intern IT Developer */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                Florida Blue/GuideWell: Intern IT Developer{" "}
                <Typography variant="caption" color="text.secondary">
                  (May 2023 – May 2024)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Developed and implemented a predictive analytics Splunk dashboard to monitor service traffic, subsequently presenting insights to company VPs." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Debugged and resolved issues in multiple web applications, enhancing software reliability and user experience." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Tested RESTful APIs using Postman, authored OpenAPI documentation, and wrote JSDoc documentation." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Developed and executed comprehensive unit tests to ensure the quality and reliability of new projects." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Leveraged Splunk machine learning algorithms to analyze data from lookup tables and predict future outages and metrics." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Gained hands-on experience with Agile methodologies and project management principles." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* UCF Department of Computer Science: Undergraduate Teaching Assistant */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                UCF Department of Computer Science: Undergraduate Teaching Assistant{" "}
                <Typography variant="caption" color="text.secondary">
                  (Jan. 2023 – Dec. 2024)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Served as a Teaching Assistant for Introduction to Programming with C, conducting weekly office hours to support student assignments, clarify programming concepts, and help with exam preparation." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Provided guidance to over 1,500 students over two years, ensuring they built a solid foundation in C programming." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Khalil Ventures/Mathnasium: Instructor */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                Khalil Ventures/Mathnasium: Instructor{" "}
                <Typography variant="caption" color="text.secondary">
                  (Dec. 2021 – May 2023)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Provided personalized tutoring to students of all ages and skill levels—engaging with an average of 4 students per hour." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Delivered tailored instruction in topics ranging from basic arithmetic to advanced algebra and calculus, adapting teaching methods to suit individual learning styles." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* IBM Accelerate, Software Engineering Track */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                IBM Accelerate, Software Engineering Track{" "}
                <Typography variant="caption" color="text.secondary">
                  (May 2022 – Aug. 2022)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Attended weekly skills workshops and professional development sessions; learned core concepts of JavaScript, React, web app security, event handling, GitHub, and Node JS." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* EDUCATION SECTION */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="M.S. Computer Science, University of Central Florida (Part-Time)"
                secondary="Jan. 2025 – May 2026"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="B.S. Computer Science, University of Central Florida - Burnett Honors College"
                secondary="Aug. 2020 – Dec. 2024"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="B.A. Music, University of Central Florida - Burnett Honors College, Pi Kappa Lambda"
                secondary="Aug. 2020 – Dec. 2024"
              />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* SKILLS SECTION */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Programming Languages: JavaScript (React, Node JS, Express, Jest), CSS & HTML, Go, Java, Python, C, Swift" />
            </ListItem>
            <ListItem>
              <ListItemText primary="DevOps Tools: Jenkins, Kubernetes, Quay, OpenShift, Docker" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Databases: MongoDB, PostgreSQL, SQL" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Version Control: Git" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tools: Splunk, Postman, Unity, VS Code, Xcode" />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* PROJECTS SECTION */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>

          {/* Flavor Fusion Smart Spice Maker */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                Flavor Fusion Smart Spice Maker{" "}
                <Typography variant="caption" color="text.secondary">
                  (Jan. 2024 – Dec. 2024)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Developed a Swift mobile app that integrates Bluetooth (BLE) to communicate with a spice maker robot, enabling real-time data exchange for precise spice measurements and blending." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Designed a user-friendly UI/UX to ensure seamless navigation and intuitive interaction for all users." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Collaborated with Mechanical Engineering students to research, design, and build the machine and mobile app." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Pitched the project to industry judges and won the Interdisciplinary Category." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* iPhone Music Practice App */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                iPhone Music Practice App{" "}
                <Typography variant="caption" color="text.secondary">
                  (Feb. 2023 – Dec. 2023)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Designed and developed a fully functional iPhone app using Swift and Xcode, leveraging Apple Developer tools." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Designed a user-friendly UI/UX to ensure seamless navigation and intuitive interaction for all users." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Integrated features including a metronome, tuner, audio recorder, and a notes calendar." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Virtual Reality Game */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                Virtual Reality Game{" "}
                <Typography variant="caption" color="text.secondary">
                  (Jan. 2023 – Apr. 2023)
                </Typography>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <ListItemText primary="Developed a VR game using Unity and the Oculus Integration SDK to run on the Oculus Quest." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Incorporated travel techniques, user interactions, physics-based interactions, animations, and an intuitive user interface." />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
}
