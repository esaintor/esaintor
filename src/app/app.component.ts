import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cvapp';
  json = {
    title: 'Experiences',
    experiences: [
      {
        as: 'Senior Developer',
        where: 'IT Zone LLC',
        from: 'Aug/2018',
        to: 'Present',
        items: [
          {
            description: 'Developed Car Parking System for Shangrila Mall by using Dahua technology SDK which can provide plate number recognition',
            tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'Dahua Technology']
          },
          {
            description: 'Developed Document Management System that would increase productivity in any office by using Tesseract open source to read context in image and pdf files',
            tags: ['Java', 'Javascript', 'Angular', 'Spring Boot', 'Tesseract']
          },
        ]
      },
      {
        as: 'Junior Developer',
        where: 'IT Zone LLC',
        from: 'Jan/2017',
        to: 'Aug/2018',
        items: [
          {
            description: 'Designed flexible, dynamic form architecture which can adopt in any situation using high level programming language',
            tags: ['Java', 'Javascript', 'Angular', 'Spring Boot']
          },
          {
            description: 'Created dashboard of custom Kaizen System by using AmChart, D3.js in short period of time',
            tags: ['Java', 'Javascript', 'C#', 'AmChart', 'D3.js']
          }
        ]
      },
      {
        as: 'Student',
        where: 'Mongolian University of Science and Technology',
        from: 'Jan/2013',
        to: 'Jan/2017',
        items: [
          {
            description: 'Created web app using statistical spacio-temporal data to show historical view of temporature diffirences',
            tags: ['Java', 'Javascript', 'Mapbox', 'Leaflet', 'Spring Boot']
          },
          {
            description: 'Created android app with facial recognition which comes in handy for logging students’attencance for our university',
            tags: ['Java', 'Android', 'Open CV']
          }
        ]
      }
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
    ]
  };
}
