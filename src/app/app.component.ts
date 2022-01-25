import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cvapp';
  theme = 'new'; // ['google', 'new']
  user = {
    firstname: 'Saintor',
    lastname: 'Batkhuu',
    fullname: 'Saintor. B',
    username: 'esaintor',
    email: 'esaintor@gmail.com',
    gitlab: 'https://github.com/esaintor',
    phone: '99162922',
    position: 'Software Developer',
    detail: 'Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Proficient in an assortment of technologies, including Java, Angular, Kafka, and Micro-services architecture.'
  };
  json = {
    title: 'Experiences',
    experiences: [
      {
        as: 'Cheif Technology Architect',
        where: 'Novelsoft LLC',
        from: 'Dec/2019',
        to: 'Present',
        items: [
          {
            description: 'Managed multiple development team in the company\n' +
              'Mainly focused on web application development using Micro-services architecture\n' +
              'Developed Real-Time Chat applications which can carry a vast number of user and provide video conference all across the platform',
            tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'RabbitMQ', 'Kafka', 'Ream-Time']
          }
        ]
      },
      {
        as: 'Senior Full-Stack Developer',
        where: 'IT Zone LLC',
        from: 'Oct/2018',
        to: 'Dec/2019',
        items: [
          {
            description: 'Managed a product development team which is responsible for developing Document Management system and Car Parking system. ',
            tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'Dahua Technology', 'Tesseract']
          }
        ]
      },
      {
        as: 'Front-end Developer',
        where: 'IT Zone LLC',
        from: 'Feb/2017',
        to: 'Oct/2018',
        items: [
          {
            description: 'Participated front-end development in the company\'s Location Tracking system, Form Survey Web application, and Content Management system.',
            tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'C#', 'AmChart', 'D3.js']
          }
        ]
      },
      // {
      //   as: 'Student',
      //   where: 'Mongolian University of Science and Technology',
      //   from: 'Jan/2013',
      //   to: 'Jan/2017',
      //   items: [
      //     {
      //       description: 'Created web app using statistical spacio-temporal data to show historical view of temporature diffirences',
      //       tags: ['Java', 'Javascript', 'Mapbox', 'Leaflet', 'Spring Boot']
      //     },
      //     {
      //       description: 'Created android app with facial recognition which comes in handy for logging students’attencance for our university',
      //       tags: ['Java', 'Android', 'Open CV']
      //     }
      //   ]
      // }
    ],
    certificate: 'Certificates',
    certificates: [
      {
        description: 'Java programming Certificate',
        tags: ['Java', 'Object oriented programming', 'Web app']
      },
      {
        description: 'Programming Technique Certificate',
        tags: ['HTML', 'Javascript', 'Web development', 'Algorithm']
      },
      {
        description: 'Microsoft Office Certificate',
        tags: ['Office', 'Windows 7']
      },
    ],
    education: 'Educations',
    educations: [
      {
        as: 'Information system',
        where: 'Mongolian University of Science and Technology',
        from: 'Jan/2013',
        to: 'Jan/2017',
        tags: ['3.36 GPA', 'Java development', 'Android', 'System automation']
      },
      {
        as: 'Certified Software Engineer',
        where: 'Aptech Education, Bangalore India',
        from: 'Aug/2012',
        to: 'Jul/2013',
        tags: ['Java', 'Javascript', 'Microsoft office', 'Web', 'Windows 7']
      }
    ],
    skills: [
      'java',
      'spring framework',
      'typescript',
      'microservices',
      'kafka',
      'rabbit mq',
      'react',
      'native android',
      'native swift',
      'docker'
    ]
  };
}
