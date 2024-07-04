const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2" style={{ listStyle: "disc" }}>
        <li>HTML | CSS | Tailwind CSS</li>
        <li>Javascript</li>
        <li>{`Node.js (Express)`}</li>
        <li>React.js </li>
        <li>Next.js</li>
        <li>Git/Github</li>
        <li>{`MySQL | (MongoDB)`}</li>
        <li>Stripe</li>
        <li>JSON Web Token</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="py-4 border-b border-primary-500">
          <b
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
            style={{ fontSize: "20px" }}
          >
            National University, Dhaka, Bangladesh - B.Sc.
          </b>{" "}
          (2018- 2021)
          <br></br>
          <b>Subject:</b> B.Sc. in Computer Science and Engineering (CGPA 3.29
          out of 4)
        </li>
        <li className="py-4 border-b border-primary-500">
          <b
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
            style={{ fontSize: "20px" }}
          >
            Birshrestha Munshi Abdur Rouf Public College, Dhaka, Bangladesh –
            H.S.C
          </b>{" "}
          (2015 - 2017)
          <br></br>
          <b>Subject:</b> Science (GPA 4.75 out of 5)
        </li>
        <li className="py-4">
          <b
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"
            style={{ fontSize: "20px" }}
          >
            Government Laboratory High
            School, Dhaka, Bangladesh - S.S.C{" "}
          </b>{" "}
          (2013 - 2015)
          <br></br>
          <b>Subject:</b> Science (GPA 5 out of 5)
        </li>
      </ul>
    ),
  },

];

export default TAB_DATA;
