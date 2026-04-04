import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // We use signals to hold the state of our projects.
  // This can easily be updated later from a Firebase or Supabase call.
  private projectsState = signal<Project[]>([
    {
      id: 'zgulit',
      title: 'ZGulit',
      description: 'Lead Developer for a high-traffic application with over 50,000+ downloads.',
      longDescription: "ZGulit is a high-traffic e-commerce platform that has achieved over 50,000+ downloads. As the Lead Developer, I architected a system capable of handling heavy user loads while maintaining snappy performance. My work involved optimizing complex data structures, ensuring full-stack stability, and implementing deep-link features to drive user engagement.\n\nKey Highlights:\n- Scaled to 50,000+ active users with 99.9% uptime.\n- Optimized SQL queries and Firebase listeners to reduce latency by 40%.\n- Integrated real-time logistics tracking and dynamic pricing engines.\n- Built a high-performance admin dashboard for merchant management.",
      thumbnailUrl: 'assets/images/projects/ZGulit_logo.png',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ethioclicks.zegulit',
      appStoreUrl: 'https://apps.apple.com/ke/app/zegulit/id6449540249',
      techStack: ['Flutter', 'Supabase', 'Firebase', 'Google Maps'],
      isFeatured: true
    },
    {
      id: 'travel-tribe',
      title: 'Travel Tribe',
      description: 'A complex, published application featuring deep API integration and persistent state management.',
      longDescription: "Built with a .NET Core backend and Flutter frontend. Travel Tribe is a full-stack solution for modern travelers. It handles complex social data, real-time updates, and cross-platform synchronization.\n\nTravel Tribe transforms solo travel into shared discovery by helping you meet people who share your passions—wherever you go. Whether you're exploring a new city or just passing through, Travel Tribe makes it easy to connect with fellow travelers and locals in real time.\n\nKey Features:\nHangouts: Instantly join or start casual meetups nearby—grab coffee, explore the city, or just chat.\n\nGroups & Events: Discover interest-based communities and attend local events like hikes, rooftop meetups, or language exchanges.\n\nTravel Buddies: Match with travelers who share your vibe, itinerary, and pace for seamless adventures together.\n\nExperiences & Offers: Post your ideal travel plans and receive personalized offers from locals who want to join or guide you.\n\nTopics & Advice: Ask questions, explore travel topics by city or interest, and subscribe to updates from real travelers.",
      thumbnailUrl: 'assets/images/projects/travel-tribe-logo.png',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.LifeHacks.hangout.dev&pcampaignid=web_share',
      appStoreUrl: 'https://apps.apple.com/ke/app/travel-tribe/id6746623152',
      techStack: ['Flutter', '.NET Core', 'REST API', 'PostgreSQL', 'Socket', 'Google Maps', 'Firebase Analytics'],
      isFeatured: true
    },
    {
      id: 'kine-tbeb',
      title: 'Kine Tbeb (Art for Children)',
      description: '5,000+ Downloads. Nurturing faith and creativity for the Ethiopian Orthodox Tewahedo Church.',
      longDescription: "Literary training (Yesine sihuf maseltegna) is a mobile application designed to nurture and educate children within the Ethiopian Orthodox Tewahedo Church tradition. The app provides a rich collection of spiritual, cultural, and educational content tailored to help children grow in their faith, understanding of their heritage, and creative abilities.\n\nKey Features:\n\n🕊️ Spiritual Teachings\nWell-organized lessons that teach children Orthodox Christian faith, values, and traditions in an engaging and child-friendly format.\n\n🎨 Interactive Learning\nFun and creative activities that promote learning about Ethiopia's culture, language, and art while strengthening spiritual growth.\n\n📚 Rich Content Library\nExplore poems, Bible stories, hymns, riddles, and moral lessons—all thoughtfully curated for children.\n\n🧠 Educational Tools\nLearn about colors, reading, basic skills, and more. The app supports early learning and prepares children for school and life.\n\n📖 Support for Orthodox Literature\nConnect children with the works of Orthodox Christian authors and teachers. Discover writings that are spiritually uplifting and culturally relevant.\n\nAdditional Information:\nDeveloped by Oriyares in collaboration with the Addis Ababa Archdiocese of the Ethiopian Orthodox Tewahedo Church, this app reflects the values of Debre Mehret St. Michael Cathedral's Sunday School Children's Division. It aims to provide an immersive spiritual and cultural experience, inspiring children to embrace their faith and heritage.\n\nEmpower your child with faith, culture, and creativity. Download Art for Children (Kine Tbeb Lehtsanat) today!",
      thumbnailUrl: 'assets/images/projects/kine-tbeb-logo.jpg',
      techStack: ['Flutter', 'REST API', 'Provider', 'SQLite'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.oriyares.kine_tbeb_lehtsanat',
      isFeatured: false
    },
    {
      id: 'awra-delivery-driver',
      title: 'Awra Delivery Driver',
      description: 'Driver application for Delivery and Ride hailing application.',
      longDescription: 'Awra Delivery Driver App is a driver application for Delivery and Ride hailing application. It is built with Flutter. It is a cross-platform application that is available on both Android and iOS.',
      thumbnailUrl: 'assets/images/projects/Awra Certi.jpg',
      videoUrl: 'assets/videos/awra-delivery.mp4',
      techStack: ['Flutter', 'REST API', 'Bloc', 'SQLite', 'Socket', 'Google Maps', 'Firebase Analytics', 'Live tracking'],
      isFeatured: false
    },
    {
      id: 'shalom-melbourne',
      title: 'Shalom Melbourne',
      description: 'A complex, published application featuring deep API integration and persistent state management.',
      longDescription: "Built with a .NET Core backend and Flutter frontend. This application features a visually engaging calendar for browsing upcoming events, integrated with a push notification system for instant updates. It allows for seamless synchronization by saving events directly to the device's native calendar and maintains real-time communication through live announcements and status alerts.",
      thumbnailUrl: 'assets/images/projects/shalom-melbourne.png',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.softwarebuilders.noticeboard&pcampaignid=web_share',
      appStoreUrl: 'https://apps.apple.com/au/app/shalom-melbourne/id6757656284',
      techStack: ['Flutter', '.NET Core', 'REST API', 'PostgreSQL', 'Socket', 'Google Meets', 'Firebase Analytics'],
      isFeatured: false
    },
    {
      id: 'zemekina',
      title: 'Zemekina',
      description: '1,000+ Downloads. Lead Developer for a Car selling e-commerce platform.',
      longDescription: "Zemekina is an online car buying and selling platform. Utilizing multi digital platform, to reach out car buyers, the app tends to sell listed cars as much as possible fast by empowering car buyers to make their best decision based on data.",
      thumbnailUrl: 'assets/images/projects/Zemekina-logo.png',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.zemekina.zemekina_mobile_app&pcampaignid=web_share',
      techStack: ['Flutter', 'Firebase', 'Google Maps'],
      isFeatured: false
    },
    {
      id: 'co-habit',
      title: 'CoHabit',
      description: 'Build habits with friends! Track, compete on leaderboards, and win.',
      longDescription: 'Co-Habit Tracker transforms your personal goals into a shared journey of success by leveraging the proven power of social accountability. Tired of quitting your habits alone? Our platform allows you to create private groups where friends, family, or colleagues can track their progress together in real-time, ensuring that everyone stays motivated and consistent. Whether you are working on shared group goals or maintaining private accountability for your own unique habits, the app provides a dynamic environment with a weekly leaderboard that builds excitement toward the Sunday Finale. Every habit you complete counts toward your rank, and crowning the weekly winner creates a fun, competitive spirit that makes building consistency addictive. With a sleek glassmorphic interface, rolling seven-day calendars for a quick overview of your streaks, and historical archives to track your growth over months or years, Co-Habit Tracker provides all the professional tools you need in a high-energy social package. Stop dreaming about your goals and start achieving them with a community that cheers you on every step of the way to claiming your crown.',
      thumbnailUrl: 'assets/images/projects/habit-share-logo.png',
      videoUrl: 'assets/videos/Habit-share.mp4',
      techStack: ['Flutter', 'Riverpod', 'Firebase', 'Supabase', 'Firebase Notification'],
      isFeatured: false
    },
  ]);

  // Read-only access to our projects
  projects = this.projectsState.asReadonly();

  constructor() { }

  // Function to filter featured projects for the hero section
  getFeaturedProjects() {
    return this.projects().filter(p => p.isFeatured);
  }
}
