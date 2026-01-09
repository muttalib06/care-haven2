// data/caregivers.js
export const CAREGIVERS = [
 
  
  {
    "id": 2,
    "name": "Michael Chen",
    "email": "michael.chen@email.com",
    "phone": "+1-555-0102",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.8,
    "reviewCount": 35,
    "location": {
      "city": "Vancouver",
      "state": "British Columbia",
      "country": "Canada",
      "coordinates": { "lat": 49.2827, "lng": -123.1207 }
    },
    "experience": 5,
    "hourlyRate": 26,
    "available": true,
    "serviceTypes": ["Child", "Special Needs"],
    "skills": [
      "Autism Support",
      "Behavioral Therapy",
      "Educational Activities",
      "Physical Therapy Support"
    ],
    "languages": ["English", "Mandarin", "Cantonese"],
    "bio": "Special needs specialist with behavioral therapy training. Expert in autism support and creating inclusive environments for children.",
    "aboutMe": "As a special education advocate, I've dedicated my career to supporting children with autism, ADHD, and developmental delays. My experience includes working in inclusive classrooms and providing one-on-one therapy support. I'm trained in Applied Behavioral Analysis (ABA) and sensory integration techniques. I believe every child deserves personalized attention that celebrates their strengths while gently addressing challenges. My trilingual abilities allow me to serve Vancouver's diverse community effectively. I collaborate closely with parents, therapists, and educators to ensure consistent care approaches. Outside work, I develop educational resources for special needs families.",
    "certificates": [
      {
        "name": "ABA Therapy Certification",
        "issuedBy": "BACB",
        "issuedDate": "2022-06-01",
        "expiryDate": "2026-06-01"
      },
      {
        "name": "Autism Spectrum Disorder Specialist",
        "issuedBy": "Special Needs Institute",
        "issuedDate": "2021-09-15",
        "expiryDate": null
      },
      {
        "name": "Pediatric CPR",
        "issuedBy": "Red Cross",
        "issuedDate": "2023-04-10",
        "expiryDate": "2025-04-10"
      }
    ],
    "education": [
      {
        "degree": "B.A. in Special Education",
        "institution": "University of British Columbia",
        "year": 2019
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Afternoon"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning"] },
      "sunday": { "available": false, "timeSlots": [] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-12-20",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 3,
      "maxDistance": 20,
      "liveIn": false,
      "overnight": false
    },
    "statistics": {
      "totalBookings": 98,
      "completedBookings": 96,
      "cancelledBookings": 2,
      "responseTime": 15
    },
    "joinedDate": "2022-11-05",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 3,
    "name": "Emily Rodriguez",
    "email": "emily.rodriguez@email.com",
    "phone": "+1-555-0103",
    "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 5.0,
    "reviewCount": 62,
    "location": {
      "city": "Montreal",
      "state": "Quebec",
      "country": "Canada",
      "coordinates": { "lat": 45.5017, "lng": -73.5673 }
    },
    "experience": 10,
    "hourlyRate": 32,
    "available": true,
    "serviceTypes": ["Elderly", "Special Needs"],
    "skills": [
      "Palliative Care",
      "Alzheimer's Care",
      "Physical Rehabilitation",
      "Companionship",
      "Medical Equipment"
    ],
    "languages": ["English", "French", "Spanish"],
    "bio": "Licensed practical nurse with 10 years in elderly care. Expert in palliative care, Alzheimer's support, and post-surgical recovery.",
    "aboutMe": "With a decade of experience in geriatric care, I've become a trusted partner for families navigating the challenges of aging. My background as a licensed practical nurse provides medical competence, while my warm personality brings comfort to those I serve. I specialize in Alzheimer's and dementia care, having completed advanced training in memory care techniques. I'm experienced with mobility aids, medication schedules, and post-surgical recovery support. My trilingual skills serve Montreal's multicultural senior community beautifully. I believe in maintaining seniors' dignity and independence while ensuring their safety. I've supported families through end-of-life care with grace and compassion.",
    "certificates": [
      {
        "name": "Licensed Practical Nurse (LPN)",
        "issuedBy": "Quebec Nursing Board",
        "issuedDate": "2014-05-20",
        "expiryDate": null
      },
      {
        "name": "Palliative Care Certification",
        "issuedBy": "Canadian Hospice Society",
        "issuedDate": "2020-11-10",
        "expiryDate": null
      },
      {
        "name": "Advanced Dementia Care",
        "issuedBy": "Alzheimer Society Canada",
        "issuedDate": "2021-03-15",
        "expiryDate": null
      }
    ],
    "education": [
      {
        "degree": "Diploma in Practical Nursing",
        "institution": "Vanier College",
        "year": 2014
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "sunday": { "available": true, "timeSlots": ["Afternoon"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-01-05",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 6,
      "maxDistance": 25,
      "liveIn": true,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 203,
      "completedBookings": 201,
      "cancelledBookings": 2,
      "responseTime": 8
    },
    "joinedDate": "2021-12-15",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 4,
    "name": "David Thompson",
    "email": "david.thompson@email.com",
    "phone": "+1-555-0104",
    "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.7,
    "reviewCount": 29,
    "location": {
      "city": "Calgary",
      "state": "Alberta",
      "country": "Canada",
      "coordinates": { "lat": 51.0447, "lng": -114.0719 }
    },
    "experience": 6,
    "hourlyRate": 25,
    "available": true,
    "serviceTypes": ["Child", "Elderly"],
    "skills": [
      "Sports Coaching",
      "Tutoring",
      "Transportation",
      "Light Housekeeping",
      "Pet Care"
    ],
    "languages": ["English"],
    "bio": "Former elementary teacher bringing educational expertise to caregiving. Energetic approach combining learning with play and outdoor activities.",
    "aboutMe": "After 6 years as an elementary school teacher, I transitioned to caregiving to provide more personalized attention to families. I combine educational expertise with genuine enthusiasm for working with people of all ages. For children, I incorporate learning into play, assist with homework, and encourage outdoor activities. With seniors, I provide companionship, help with errands, and engage them in conversations and activities that spark joy. I'm comfortable with pets and often include them in care routines. My reliable transportation and clean driving record make me ideal for families needing pickup services. I'm punctual, organized, and communicate proactively with families.",
    "certificates": [
      {
        "name": "Teaching Certificate",
        "issuedBy": "Alberta Education",
        "issuedDate": "2018-06-01",
        "expiryDate": null
      },
      {
        "name": "Standard First Aid & CPR",
        "issuedBy": "St. John Ambulance",
        "issuedDate": "2023-02-10",
        "expiryDate": "2025-02-10"
      },
      {
        "name": "Child Development Associate",
        "issuedBy": "Council for Professional Recognition",
        "issuedDate": "2019-08-15",
        "expiryDate": null
      }
    ],
    "education": [
      {
        "degree": "B.Ed. in Elementary Education",
        "institution": "University of Calgary",
        "year": 2018
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "thursday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "sunday": { "available": true, "timeSlots": ["Morning", "Afternoon"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2023-03-20",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 3,
      "maxDistance": 18,
      "liveIn": false,
      "overnight": false
    },
    "statistics": {
      "totalBookings": 87,
      "completedBookings": 85,
      "cancelledBookings": 2,
      "responseTime": 18
    },
    "joinedDate": "2023-02-01",
    "lastActive": "2024-01-07",
    "status": "Active"
  },
  {
    "id": 5,
    "name": "Amanda Taylor",
    "email": "amanda.taylor@email.com",
    "phone": "+1-555-0105",
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.7,
    "reviewCount": 28,
    "location": {
      "city": "Ottawa",
      "state": "Ontario",
      "country": "Canada",
      "coordinates": { "lat": 45.4215, "lng": -75.6972 }
    },
    "experience": 6,
    "hourlyRate": 24,
    "available": true,
    "serviceTypes": ["Child", "Elderly"],
    "skills": [
      "CPR Certified",
      "Nursing Assistant",
      "Light Housekeeping",
      "Transportation"
    ],
    "languages": ["English"],
    "bio": "Nursing assistant with flexible schedule and reliable transportation. Combines medical knowledge with practical household support.",
    "aboutMe": "I've been providing caregiving services for 6 years, working with families who need dependable, professional support. My nursing assistant training gives me confidence handling medical situations, administering medications, and monitoring health changes. I'm particularly good at establishing routines that work for busy families while remaining flexible when plans change. With children, I'm patient and creative, turning daily activities into learning opportunities. With elderly clients, I focus on maintaining their independence while providing necessary assistance. I'm comfortable with light housekeeping and meal preparation. My excellent driving record makes me reliable for transportation needs. I believe open communication is key to successful care relationships.",
    "certificates": [
      {
        "name": "Nursing Assistant Certification",
        "issuedBy": "Ottawa Healthcare Institute",
        "issuedDate": "2018-09-01",
        "expiryDate": null
      },
      {
        "name": "CPR & First Aid",
        "issuedBy": "Red Cross Canada",
        "issuedDate": "2023-05-20",
        "expiryDate": "2025-05-20"
      }
    ],
    "education": [
      {
        "degree": "Certificate in Personal Support Work",
        "institution": "Algonquin College",
        "year": 2018
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Evening"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning"] },
      "sunday": { "available": false, "timeSlots": [] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2023-06-10",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 4,
      "maxDistance": 20,
      "liveIn": false,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 72,
      "completedBookings": 70,
      "cancelledBookings": 2,
      "responseTime": 20
    },
    "joinedDate": "2023-05-01",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 6,
    "name": "Jennifer Park",
    "email": "jennifer.park@email.com",
    "phone": "+1-555-0106",
    "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.9,
    "reviewCount": 53,
    "location": {
      "city": "Toronto",
      "state": "Ontario",
      "country": "Canada",
      "coordinates": { "lat": 43.6532, "lng": -79.3832 }
    },
    "experience": 9,
    "hourlyRate": 30,
    "available": true,
    "serviceTypes": ["Child", "Special Needs"],
    "skills": [
      "Early Childhood Education",
      "Music Therapy",
      "Speech Development",
      "Sensory Activities"
    ],
    "languages": ["English", "Korean"],
    "bio": "Early childhood educator with music therapy certification. Specializes in speech development and creative play for ages 0-6.",
    "aboutMe": "My journey in childcare began with earning my ECE diploma, then expanding into music therapy after seeing its profound impact on children's development. I specialize in ages 0-6, creating age-appropriate activities that stimulate cognitive, social, and emotional growth. I'm particularly skilled with children who have speech delays or communication disorders, using music and play-based techniques to encourage expression. My Korean language skills are valuable for bilingual families wanting to maintain their cultural heritage. I maintain detailed daily reports for parents, documenting milestones and activities. I'm patient, creative, and genuinely love watching children discover the world. Families appreciate my structured yet flexible approach to care.",
    "certificates": [
      {
        "name": "Early Childhood Education Diploma",
        "issuedBy": "George Brown College",
        "issuedDate": "2015-06-01",
        "expiryDate": null
      },
      {
        "name": "Music Therapy Certification",
        "issuedBy": "Canadian Association for Music Therapy",
        "issuedDate": "2019-04-15",
        "expiryDate": null
      },
      {
        "name": "Infant & Child CPR",
        "issuedBy": "Red Cross",
        "issuedDate": "2023-03-10",
        "expiryDate": "2025-03-10"
      }
    ],
    "education": [
      {
        "degree": "Diploma in Early Childhood Education",
        "institution": "George Brown College",
        "year": 2015
      },
      {
        "degree": "Certificate in Music Therapy",
        "institution": "Wilfrid Laurier University",
        "year": 2019
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": false, "timeSlots": [] },
      "sunday": { "available": false, "timeSlots": [] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-09-15",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 4,
      "maxDistance": 12,
      "liveIn": false,
      "overnight": false
    },
    "statistics": {
      "totalBookings": 167,
      "completedBookings": 165,
      "cancelledBookings": 2,
      "responseTime": 10
    },
    "joinedDate": "2022-08-01",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 7,
    "name": "Robert Johnson",
    "email": "robert.johnson@email.com",
    "phone": "+1-555-0107",
    "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.6,
    "reviewCount": 21,
    "location": {
      "city": "Edmonton",
      "state": "Alberta",
      "country": "Canada",
      "coordinates": { "lat": 53.5461, "lng": -113.4938 }
    },
    "experience": 4,
    "hourlyRate": 23,
    "available": true,
    "serviceTypes": ["Elderly"],
    "skills": [
      "Veterans Care",
      "Mobility Assistance",
      "Companionship",
      "Technology Support"
    ],
    "languages": ["English"],
    "bio": "Former military medic specializing in elderly and veteran care. Skilled in mobility assistance and teaching seniors technology.",
    "aboutMe": "After serving in the Canadian Armed Forces as a medic, I found my calling in elderly care, particularly serving veterans who share my military background. My medical training equipped me with skills to handle health emergencies, monitor vital signs, and assist with medications. I excel at helping seniors with mobility challenges, using proper transfer techniques and encouraging independence. I'm also tech-savvy and enjoy teaching seniors to use smartphones, video calls, and other technology to stay connected with family. Many clients appreciate my straightforward, no-nonsense approach combined with genuine compassion. I provide companionship through conversations, games, and outings. My goal is helping seniors maintain quality of life and dignity.",
    "certificates": [
      {
        "name": "Combat Medic Training",
        "issuedBy": "Canadian Armed Forces",
        "issuedDate": "2018-03-15",
        "expiryDate": null
      },
      {
        "name": "Personal Support Worker",
        "issuedBy": "NorQuest College",
        "issuedDate": "2020-09-20",
        "expiryDate": null
      },
      {
        "name": "Standard First Aid",
        "issuedBy": "St. John Ambulance",
        "issuedDate": "2023-01-10",
        "expiryDate": "2025-01-10"
      }
    ],
    "education": [
      {
        "degree": "Certificate in Personal Support Work",
        "institution": "NorQuest College",
        "year": 2020
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Afternoon"] },
      "sunday": { "available": true, "timeSlots": ["Afternoon"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2023-02-28",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 4,
      "maxDistance": 22,
      "liveIn": false,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 56,
      "completedBookings": 54,
      "cancelledBookings": 2,
      "responseTime": 25
    },
    "joinedDate": "2023-02-01",
    "lastActive": "2024-01-07",
    "status": "Active"
  },
  {
    "id": 8,
    "name": "Lisa Nguyen",
    "email": "lisa.nguyen@email.com",
    "phone": "+1-555-0108",
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.8,
    "reviewCount": 41,
    "location": {
      "city": "Vancouver",
      "state": "British Columbia",
      "country": "Canada",
      "coordinates": { "lat": 49.2827, "lng": -123.1207 }
    },
    "experience": 7,
    "hourlyRate": 27,
    "available": true,
    "serviceTypes": ["Child", "Elderly"],
    "skills": [
      "Newborn Care",
      "Postpartum Support",
      "Meal Preparation",
      "Sleep Training"
    ],
    "languages": ["English", "Vietnamese"],
    "bio": "Certified postpartum doula and newborn specialist. Expert in sleep training and supporting new parents through early infancy.",
    "aboutMe": "As a certified postpartum doula and newborn care specialist, I've supported over 100 families through the transformative newborn period. I provide hands-on care for infants while teaching parents essential skills like feeding, bathing, and soothing techniques. My sleep training expertise helps families establish healthy sleep habits early on. I also support postpartum mothers with meal preparation, light housekeeping, and emotional support during recovery. My Vietnamese heritage allows me to serve immigrant families in their native language, providing culturally sensitive care. I also work with elderly clients, bringing the same patience and attention to detail. I'm known for my calm presence during stressful moments and ability to anticipate family needs.",
    "certificates": [
      {
        "name": "Postpartum Doula Certification",
        "issuedBy": "DONA International",
        "issuedDate": "2017-05-20",
        "expiryDate": null
      },
      {
        "name": "Newborn Care Specialist",
        "issuedBy": "Newborn Care Training Academy",
        "issuedDate": "2018-02-15",
        "expiryDate": null
      },
      {
        "name": "Infant CPR & First Aid",
        "issuedBy": "Red Cross",
        "issuedDate": "2023-04-05",
        "expiryDate": "2025-04-05"
      }
    ],
    "education": [
      {
        "degree": "Certificate in Maternal & Child Health",
        "institution": "Douglas College",
        "year": 2017
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "saturday": { "available": true, "timeSlots": ["Morning"] },
      "sunday": { "available": false, "timeSlots": [] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-10-10",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 5,
      "maxDistance": 18,
      "liveIn": true,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 134,
      "completedBookings": 132,
      "cancelledBookings": 2,
      "responseTime": 14
    },
    "joinedDate": "2022-09-15",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 9,
    "name": "Marcus Williams",
    "email": "marcus.williams@email.com",
    "phone": "+1-555-0109",
    "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.9,
    "reviewCount": 38,
    "location": {
      "city": "Winnipeg",
      "state": "Manitoba",
      "country": "Canada",
      "coordinates": { "lat": 49.8951, "lng": -97.1384 }
    },
    "experience": 8,
    "hourlyRate": 29,
    "available": true,
    "serviceTypes": ["Special Needs", "Elderly"],
    "skills": [
      "Physical Therapy Support",
      "Wheelchair Assistance",
      "Wound Care",
      "Stroke Recovery"
    ],
    "languages": ["English"],
    "bio": "Physical therapy assistant specializing in rehabilitation. Expert in stroke recovery, mobility support, and wound care management.",
    "aboutMe": "My career in caregiving began as a physical therapy assistant, where I discovered my passion for helping people recover and thrive. I've specialized in stroke recovery, post-surgical rehabilitation, and progressive conditions requiring mobility support. I work extensively with wheelchair users, ensuring proper positioning and safe transfers. My wound care training allows me to assist with post-operative care and chronic conditions. I'm skilled at adapting exercises to individual abilities, making therapy engaging rather than intimidating. Beyond physical support, I provide encouragement and emotional support during challenging recovery periods. Families trust me to be both competent and compassionate, qualities essential in rehabilitation care.",
    "certificates": [
      {
        "name": "Physical Therapy Assistant",
        "issuedBy": "Red River College",
        "issuedDate": "2016-05-15",
        "expiryDate": null
      },
      {
        "name": "Wound Care Certification",
        "issuedBy": "Canadian Association of Wound Care",
        "issuedDate": "2019-08-20",
        "expiryDate": "2025-08-20"
      },
      {
        "name": "Advanced First Aid",
        "issuedBy": "St. John Ambulance",
        "issuedDate": "2023-02-10",
        "expiryDate": "2025-02-10"
      }
    ],
    "education": [
      {
        "degree": "Diploma in Physical Therapy Assistant",
        "institution": "Red River College",
        "year": 2016
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning"] },
      "sunday": { "available": false, "timeSlots": [] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-11-20",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 4,
      "maxDistance": 20,
      "liveIn": false,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 112,
      "completedBookings": 110,
      "cancelledBookings": 2,
      "responseTime": 16
    },
    "joinedDate": "2022-10-15",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 10,
    "name": "Rachel Green",
    "email": "rachel.green@email.com",
    "phone": "+1-555-0110",
    "image": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 5.0,
    "reviewCount": 45,
    "location": {
      "city": "Halifax",
      "state": "Nova Scotia",
      "country": "Canada",
      "coordinates": { "lat": 44.6488, "lng": -63.5752 }
    },
    "experience": 12,
    "hourlyRate": 35,
    "available": true,
    "serviceTypes": ["Child", "Elderly", "Special Needs"],
    "skills": [
      "Registered Nurse",
      "IV Administration",
      "Diabetes Management",
      "Mental Health Support"
    ],
    "languages": ["English", "American Sign Language"],
    "bio": "Registered Nurse with 12 years of comprehensive healthcare experience. I provide medical-grade care in home settings, managing complex health needs with professionalism and warmth. My ASL fluency makes me accessible to deaf and hard-of-hearing clients.",
    "aboutMe": "As a Registered Nurse, I bridge the gap between hospital care and home comfort. My experience spans pediatric, geriatric, and critical care nursing, allowing me to handle diverse medical situations confidently. I'm skilled in IV therapy, wound management, medication administration, and monitoring chronic conditions like diabetes and heart disease. I've worked with children who have complex medical needs, elderly clients requiring post-hospitalization care, and adults with disabilities. My American Sign Language proficiency opened doors to serving the deaf community, where quality healthcare providers are scarce. I believe in patient education, ensuring families understand conditions and treatments. My calm demeanor during medical emergencies has earned families' trust repeatedly.",
    "certificates": [
      {
        "name": "Registered Nurse License",
        "issuedBy": "Nova Scotia College of Nursing",
        "issuedDate": "2012-06-01",
        "expiryDate": "2025-06-01"
      },
      {
        "name": "IV Therapy Certification",
        "issuedBy": "Canadian Nurses Association",
        "issuedDate": "2014-03-15",
        "expiryDate": null
      },
      {
        "name": "ASL Level 3",
        "issuedBy": "Atlantic Provinces Special Education Authority",
        "issuedDate": "2018-11-20",
        "expiryDate": null
      },
      {
        "name": "Diabetes Education Certificate",
        "issuedBy": "Canadian Diabetes Association",
        "issuedDate": "2020-05-10",
        "expiryDate": null
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Science in Nursing",
        "institution": "Dalhousie University",
        "year": 2012
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "friday": { "available": true, "timeSlots": ["Morning"] },
      "saturday": { "available": false, "timeSlots": [] },
      "sunday": { "available": true, "timeSlots": ["Afternoon", "Evening"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-08-15",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 6,
      "maxDistance": 25,
      "liveIn": true,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 178,
      "completedBookings": 178,
      "cancelledBookings": 0,
      "responseTime": 9
    },
    "joinedDate": "2022-07-01",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 11,
    "name": "Daniel Kim",
    "email": "daniel.kim@email.com",
    "phone": "+1-555-0111",
    "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.6,
    "reviewCount": 24,
    "location": {
      "city": "Mississauga",
      "state": "Ontario",
      "country": "Canada",
      "coordinates": { "lat": 43.589, "lng": -79.6441 }
    },
    "experience": 5,
    "hourlyRate": 26,
    "available": true,
    "serviceTypes": ["Child", "Special Needs"],
    "skills": [
      "ADHD Support",
      "Homework Help",
      "Outdoor Activities",
      "Conflict Resolution"
    ],
    "languages": ["English", "Korean", "Japanese"],
    "bio": "Energetic caregiver specializing in school-age children and those with ADHD...",
    "aboutMe": "Working with children is my passion...",
    "certificates": [
      {
        "name": "ADHD Support Specialist",
        "issuedBy": "CHADD",
        "issuedDate": "2021-04-15",
        "expiryDate": null
      },
      {
        "name": "Child & Youth Worker Certificate",
        "issuedBy": "Humber College",
        "issuedDate": "2019-08-20",
        "expiryDate": null
      },
      {
        "name": "CPR & First Aid",
        "issuedBy": "Red Cross",
        "issuedDate": "2023-06-10",
        "expiryDate": "2025-06-10"
      }
    ],
    "education": [
      {
        "degree": "Diploma in Child & Youth Worker",
        "institution": "Humber College",
        "year": 2019
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "wednesday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "sunday": { "available": true, "timeSlots": ["Afternoon"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2023-04-20",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 3,
      "maxDistance": 15,
      "liveIn": false,
      "overnight": false
    },
    "statistics": {
      "totalBookings": 68,
      "completedBookings": 66,
      "cancelledBookings": 2,
      "responseTime": 22
    },
    "joinedDate": "2023-03-15",
    "lastActive": "2024-01-07",
    "status": "Active"
  },
  {
    "id": 12,
    "name": "Sophie Leblanc",
    "email": "sophie.leblanc@email.com",
    "phone": "+1-555-0112",
    "image": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.9,
    "reviewCount": 51,
    "location": {
      "city": "Quebec City",
      "state": "Quebec",
      "country": "Canada",
      "coordinates": { "lat": 46.8139, "lng": -71.208 }
    },
    "experience": 11,
    "hourlyRate": 31,
    "available": true,
    "serviceTypes": ["Elderly", "Special Needs"],
    "skills": [
      "Parkinson's Care",
      "Occupational Therapy Support",
      "Fall Prevention",
      "Assistive Technology"
    ],
    "languages": ["French", "English"],
    "bio": "Specialized caregiver for clients with Parkinson's disease...",
    "aboutMe": "After witnessing my father's journey with Parkinson's disease...",
    "certificates": [
      {
        "name": "Occupational Therapy Assistant",
        "issuedBy": "Cégep de Sainte-Foy",
        "issuedDate": "2013-05-20",
        "expiryDate": null
      },
      {
        "name": "Parkinson's Disease Care Specialist",
        "issuedBy": "Parkinson Canada",
        "issuedDate": "2017-09-15",
        "expiryDate": null
      },
      {
        "name": "Fall Prevention Certification",
        "issuedBy": "Canadian Centre for Activity and Aging",
        "issuedDate": "2020-03-10",
        "expiryDate": null
      }
    ],
    "education": [
      {
        "degree": "Diploma in Occupational Therapy Assistant",
        "institution": "Cégep de Sainte-Foy",
        "year": 2013
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning"] },
      "sunday": { "available": false, "timeSlots": [] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-07-10",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 5,
      "maxDistance": 20,
      "liveIn": true,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 189,
      "completedBookings": 187,
      "cancelledBookings": 2,
      "responseTime": 11
    },
    "joinedDate": "2022-06-01",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 13,
    "name": "James Martinez",
    "email": "james.martinez@email.com",
    "phone": "+1-555-0113",
    "image": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.7,
    "reviewCount": 33,
    "location": {
      "city": "London",
      "state": "Ontario",
      "country": "Canada",
      "coordinates": { "lat": 42.9849, "lng": -81.2453 }
    },
    "experience": 6,
    "hourlyRate": 25,
    "available": true,
    "serviceTypes": ["Child", "Elderly"],
    "skills": [
      "Cooking & Nutrition",
      "Grocery Shopping",
      "Pet Care",
      "House Management"
    ],
    "languages": ["English", "Spanish"],
    "bio": "Versatile caregiver with culinary training...",
    "aboutMe": "My culinary school background sets me apart...",
    "certificates": [
      {
        "name": "Culinary Arts Certificate",
        "issuedBy": "Fanshawe College",
        "issuedDate": "2018-04-15",
        "expiryDate": null
      },
      {
        "name": "Food Safety & Handling",
        "issuedBy": "Ontario Ministry of Health",
        "issuedDate": "2023-01-20",
        "expiryDate": "2026-01-20"
      },
      {
        "name": "Standard First Aid",
        "issuedBy": "Red Cross",
        "issuedDate": "2023-05-10",
        "expiryDate": "2025-05-10"
      }
    ],
    "education": [
      {
        "degree": "Certificate in Culinary Arts",
        "institution": "Fanshawe College",
        "year": 2018
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "saturday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "sunday": { "available": true, "timeSlots": ["Afternoon"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2023-03-15",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 4,
      "maxDistance": 18,
      "liveIn": false,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 94,
      "completedBookings": 92,
      "cancelledBookings": 2,
      "responseTime": 19
    },
    "joinedDate": "2023-02-01",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 14,
    "name": "Patricia O'Connor",
    "email": "patricia.oconnor@email.com",
    "phone": "+1-555-0114",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 5.0,
    "reviewCount": 58,
    "location": {
      "city": "Victoria",
      "state": "British Columbia",
      "country": "Canada",
      "coordinates": { "lat": 48.4284, "lng": -123.3656 }
    },
    "experience": 15,
    "hourlyRate": 38,
    "available": true,
    "serviceTypes": ["Elderly", "Special Needs"],
    "skills": [
      "Hospice Care",
      "Grief Support",
      "Respiratory Therapy",
      "Pain Management"
    ],
    "languages": ["English"],
    "bio": "Compassionate hospice and palliative care specialist...",
    "aboutMe": "Hospice care is sacred work...",
    "certificates": [
      {
        "name": "Palliative Care Certification",
        "issuedBy": "Canadian Hospice Palliative Care Association",
        "issuedDate": "2010-04-15",
        "expiryDate": null
      },
      {
        "name": "Respiratory Therapy Assistant",
        "issuedBy": "British Columbia Institute of Technology",
        "issuedDate": "2009-06-20",
        "expiryDate": null
      },
      {
        "name": "Pain Management Specialist",
        "issuedBy": "Canadian Pain Society",
        "issuedDate": "2015-09-10",
        "expiryDate": null
      },
      {
        "name": "Grief Counseling Certificate",
        "issuedBy": "Victoria Hospice",
        "issuedDate": "2018-03-15",
        "expiryDate": null
      }
    ],
    "education": [
      {
        "degree": "Diploma in Healthcare",
        "institution": "Camosun College",
        "year": 2009
      },
      {
        "degree": "Certificate in Palliative Care",
        "institution": "University of Victoria",
        "year": 2010
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "wednesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "sunday": { "available": true, "timeSlots": ["Afternoon", "Evening"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-05-20",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 8,
      "maxDistance": 30,
      "liveIn": true,
      "overnight": true
    },
    "statistics": {
      "totalBookings": 234,
      "completedBookings": 234,
      "cancelledBookings": 0,
      "responseTime": 7
    },
    "joinedDate": "2022-04-01",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 15,
    "name": "Kevin Patel",
    "email": "kevin.patel@email.com",
    "phone": "+1-555-0115",
    "image": "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.8,
    "reviewCount": 39,
    "location": {
      "city": "Brampton",
      "state": "Ontario",
      "country": "Canada",
      "coordinates": { "lat": 43.7315, "lng": -79.7624 }
    },
    "experience": 7,
    "hourlyRate": 27,
    "available": true,
    "serviceTypes": ["Child", "Special Needs"],
    "skills": [
      "Down Syndrome Care",
      "Sign Language",
      "Behavioral Support",
      "Arts & Crafts"
    ],
    "languages": ["English", "Hindi", "Gujarati"],
    "bio": "Patient and creative caregiver...",
    "aboutMe": "My younger sister has Down syndrome...",
    "certificates": [
      {
        "name": "Developmental Disabilities Certificate",
        "issuedBy": "Sheridan College",
        "issuedDate": "2017-08-15",
        "expiryDate": null
      },
      {
        "name": "American Sign Language Level 2",
        "issuedBy": "Canadian Hearing Society",
        "issuedDate": "2019-04-20",
        "expiryDate": null
      },
      {
        "name": "Positive Behavioral Support",
        "issuedBy": "Ontario Association on Developmental Disabilities",
        "issuedDate": "2020-11-10",
        "expiryDate": null
      },
      {
        "name": "First Aid & CPR",
        "issuedBy": "Red Cross",
        "issuedDate": "2023-03-15",
        "expiryDate": "2025-03-15"
      }
    ],
    "education": [
      {
        "degree": "Diploma in Developmental Services Worker",
        "institution": "Sheridan College",
        "year": 2017
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Afternoon", "Evening"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon", "Evening"] },
      "friday": { "available": true, "timeSlots": ["Afternoon"] },
      "saturday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "sunday": { "available": true, "timeSlots": ["Afternoon"] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2022-10-25",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 4,
      "maxDistance": 16,
      "liveIn": false,
      "overnight": false
    },
    "statistics": {
      "totalBookings": 127,
      "completedBookings": 125,
      "cancelledBookings": 2,
      "responseTime": 13
    },
    "joinedDate": "2022-09-15",
    "lastActive": "2024-01-08",
    "status": "Active"
  },
  {
    "id": 16,
    "name": "Michelle Dubois",
    "email": "michelle.dubois@email.com",
    "phone": "+1-555-0116",
    "image": "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    "verified": true,
    "rating": 4.6,
    "reviewCount": 27,
    "location": {
      "city": "Gatineau",
      "state": "Quebec",
      "country": "Canada",
      "coordinates": { "lat": 45.4765, "lng": -75.7013 }
    },
    "experience": 5,
    "hourlyRate": 24,
    "available": true,
    "serviceTypes": ["Child","Registered Nurse"],
    "skills": [
      "Montessori Method",
      "French Immersion",
      "Nature Education",
      "Creative Play"
    ],
    "languages": ["French", "English"],
    "bio": "Montessori-trained educator passionate about child-led learning...",
    "aboutMe": "I bring Montessori philosophy into home caregiving...",
    "certificates": [
      {
        "name": "Montessori Early Childhood Education",
        "issuedBy": "Toronto Montessori Institute",
        "issuedDate": "2019-06-15",
        "expiryDate": null
      },
      {
        "name": "Nature-Based Education Certificate",
        "issuedBy": "Child & Nature Alliance",
        "issuedDate": "2021-09-20",
        "expiryDate": null
      },
      {
        "name": "Pediatric First Aid",
        "issuedBy": "Red Cross Canada",
        "issuedDate": "2023-04-10",
        "expiryDate": "2025-04-10"
      }
    ],
    "education": [
      {
        "degree": "Diploma in Early Childhood Education",
        "institution": "Collège La Cité",
        "year": 2019
      }
    ],
    "availability": {
      "monday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "tuesday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "wednesday": { "available": true, "timeSlots": ["Morning"] },
      "thursday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "friday": { "available": true, "timeSlots": ["Morning", "Afternoon"] },
      "saturday": { "available": false, "timeSlots": [] },
      "sunday": { "available": false, "timeSlots": [] }
    },
    "backgroundCheck": {
      "completed": true,
      "completedDate": "2023-05-15",
      "status": "Passed"
    },
    "preferences": {
      "minHours": 4,
      "maxDistance": 14,
      "liveIn": false,
      "overnight": false
    },
    "statistics": {
      "totalBookings": 76,
      "completedBookings": 74,
      "cancelledBookings": 2,
      "responseTime": 21
    },
    "joinedDate": "2023-04-01",
    "lastActive": "2024-01-07",
    "status": "Active"
  }
];

export const SERVICE_TYPES = ["Child", "Elderly", "Special Needs"];
export const EXPERIENCE_LEVELS = ["1-3", "4-6", "7-9", "10+"];
