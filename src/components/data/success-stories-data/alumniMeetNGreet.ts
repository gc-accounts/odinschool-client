export const alumniMeetNGreet = {
  url: "https://strapi.odinschool.com/uploads/Meet_and_Greet_Video_4_1_1_504a80e71d.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Your_paragraph_text_6_36ba258a2a.webp"

}

export const odinGradOfTheMonth = {
  url: "https://strapi.odinschool.com/uploads/ADA_20200_X80_20indv_20_2_dae4d5c757.svg",
  certificateImage:
    "https://strapi.odinschool.com/uploads/Untitled_design_30_fb4af742cb.webp",
}

export const odinGradsSuccessStories = [{
  url: "https://strapi.odinschool.com/uploads/Success_story_Panchatapa_Purkayastha_1_8354f60fcb.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Purkayastha_4d7268f77f.webp"
},
{
  url: "https://strapi.odinschool.com/uploads/Vaishnavi_Pote_3674997c7b.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Vaishnavi_Pote_defa006bce.webp"
},
{
  url: "https://strapi.odinschool.com/uploads/Success_20story_20_20_Aryan_20_Mullick_e1aed72a84.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Aryan_20_Mullick_11f8c3400c.webp"
},
{
  url: "https://strapi.odinschool.com/uploads/student_testimonial_1_1_9d536b38d7.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Aboli_Zagade_fe6090e5dc.webp"
},
{
  url: "https://strapi.odinschool.com/uploads/Success_20story_20_20_20_Raunak_20_Kumar_7e259d7cf0.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Raunak_20_Kumar_1_61471a3de6.webp"
},
{
  url: "https://strapi.odinschool.com/uploads/Success_20story_20_20_20_Aryan_20_Singh_20_Tomar_fd0b21d278.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Aryan_20_Singh_9c5391fcfd.webp"
},
{
  url: "https://strapi.odinschool.com/uploads/Success_20story_20_20_20_Satya_20_Supraja_afcf487b23.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Satya_20_Supraja_81c295c121.webp"
},
{
  url: "https://strapi.odinschool.com/uploads/Success_story_Vivekananda_8a94df6c8f.mp4",
  thumbnail: "https://strapi.odinschool.com/uploads/Vivekananda_1_e6bfdf8107.webp"
}
].map((i, ii) => ({ ...i, id: ii + 1 }))



export const courses = [
  {
    id: "1",
    title: "Can a dietician switch to Data Science? Nidhi Kulkarni shows it's possible.",
    description:
      "  From confusing Python, the programming language, with the reptile giant, to landing a job at Prolifcs, a leader in digital transformation, data, analytics, and DevOps, Nidhi's career trajectory has been exceptional. Read her illustrious career transformation story here.   ",
    url_slug:
      "/blog/this-is-how-nidhi-kulkarni-a-dietician-became-a-data-science-professional",
    image: "https://strapi.odinschool.com/uploads/Nidhi_20_Kulkarni_20_Sucess_20sotre_8a232f90fc.png"
  },
  {
    id: "2",
    title: "A great comeback after an 11-year career gap - Naga Lakshmi's journey to PepsiCo.",
    description:
      "  Naga Lakshmi had an 11-year career gap when she discovered the demand for Data Science professionals in India. With just 7 months of experience as a Junior Software Engineer, this mother of two became a Senior Analyst at PepsiCo! Read her inspiring story here.  ",
    url_slug:
      "/blog/naga-lakshmis-journey-to-pepsico-the-data-science-career-relaunch-story-you-need-to-read",
    image: "https://strapi.odinschool.com/uploads/naga_20_Lakshmi_20sucess_20store_6f23971ad2.png"
  },
  {
    id: "3",
    title: "A full-time mother's career relaunch after 6 years - Visweswari's success story",
    description:
      '  "As a full-time mother, it didn\'t occur to me that I could have a sense of purpose outside my household. Though it was fulfilling to nurture my child and see him grow up, I did not work for 6 years." Read her story to find out how she relaunched her career after a 6-year break.  ',
    url_slug:
      "/blog/visweswaris-success-journey-how-this-full-time-mother-relaunched-her-career",
    image: "https://strapi.odinschool.com/uploads/Visweswari_20pitchika_20sucess_20store_0d64b9002b.png"
  },
];