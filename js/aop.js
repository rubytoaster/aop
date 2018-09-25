var slideIndex = 1;
var total = 146;

var searchDomain = [
  {key: "AA", value : "Aircraft Availability", area : "acro"},
  {key: "ABSS", value : "Automated Business Service System", area : "acro"},
  {key: "ABW", value : "Air Base Wing", area : "acro"},
  {key: "ACF", value : "Acceptance Check Flight", area : "acro"},
  {key: "AFI", value : "Air Force Instruction", area : "acro"},
  {key: "AFMAN", value : "Air Force Manual", area : "acro"},
  {key: "AFPC", value : "Air Force Personnel Center", area : "acro"},
  {key: "AFPD", value : "Air Force Policy Directive", area : "acro"},
  {key: "AFRIMS", value : "Air Force Records Information Management System", area : "acro"},
  {key: "AFSAS", value : "Air Force Safety Automated System", area : "acro"},
  {key: "AFSOC", value : "Air Force Special Operations Command", area : "acro"},
  {key: "AMOC", value : "Aircraft Maintenance Operation Center", area : "acro"},
  {key: "AO", value : "Action Officer", area : "acro"},
  {key: "AOC", value : "Air Operations Center", area : "acro"},
  {key: "AOR", value : "Area of Responsibility ", area : "acro"},
  {key: "CER", value : "Cost Effective Readiness", area : "acro"},
  {key: "CoF", value : "Complex of the Future", area : "acro"},
  {key: "CPI", value : "Continuous Process Improvement", area : "acro"},
  {key: "DBR", value : "Drum Buffer Rope", area : "acro"},
  {key: "DLA", value : "Defense Logistics Agency", area : "acro"},
  {key: "DMAIC", value : "Define, Measure, Analyze, Improve, Control", area : "acro"},
  {key: "DMAWG", value : "Depot Maintenance Activation Working Group", area : "acro"},
  {key: "DoD", value : "Department of Defense", area : "acro"},
  {key: "DOTmLPF-P", value : "Doctrine, Organization, Training, material, Leadership, Personnel, Facilities, and Policy", area : "acro"},
  {key: "DP", value : "Directorate of Personnel", area : "acro"},
  {key: "FDB", value : "Financial Data Base", area : "acro"},
  {key: "FM", value : "Financial Management ", area : "acro"},
  {key: "FRIP", value : "Full Rate Initial Production", area : "acro"},
  {key: "GMT", value : "Gated Management Tool", area : "acro"},
  {key: "GPC", value : "Government Purchase Card", area : "acro"},
  {key: "IA", value : "Implements Agreements", area : "acro"},
  {key: "ICE", value : "Interactive Customer Evaluation", area : "acro"},
  {key: "IM", value : "Item Manager", area : "acro"},
  {key: "IMS", value : "Integrated Master Schedule", area : "acro"},
  {key: "IMSC", value : "Installation and Mission Support Center", area : "acro"},
  {key: "IPV", value : "Individual Prime Vendor", area : "acro"},
  {key: "JA", value : "Judge Advocate", area : "acro"},
  {key: "LAIRMCM", value : "Large Aircraft Infrared Countermeasures", area : "acro"},
  {key: "LGS", value : "Logistics Directorate's Performance Management Division", area : "acro"},
  {key: "LRIP", value : "Low Rate Initial Production", area : "acro"},
  {key: "LRS", value : "Logistics Readiness Squadron", area : "acro"},
  {key: "LRU", value : "Line Replacement Unit", area : "acro"},
  {key: "MAPO", value : "Maintenance Aquisition Program Office", area : "acro"},
  {key: "MDS", value : "Mission Design Series", area : "acro"},
  {key: "METL", value : "Mission Essential Task List", area : "acro"},
  {key: "METs", value : "Mission Essential Tasks", area : "acro"},
  {key: "MGA", value : "Major Graded Area", area : "acro"},
  {key: "MIPR", value : "Military Interdepartmental Purchase Request", area : "acro"},
  {key: "MLG", value : "Main Landing Gear", area : "acro"},
  {key: "MORD", value : "Miscellaneous Obligation Requirements Document", area : "acro"},
  {key: "NAF", value : "Numbered Air Force", area : "acro"},
  {key: "OC-ALC", value : "Oklahoma City Air Logistics Complex", area : "acro"},
  {key: "OO-ALC/OBP", value : "OO-ALC Business Office", area : "acro"},
  {key: "OFPS", value : "Operational Flight Programs", area : "acro"},
  {key: "OMS", value : "Occupational Medical Services", area : "acro"},
  {key: "OO-ALC", value : "Ogden Air Logistics Complex", area : "acro"},
  {key: "ORB", value : "Opportunity Review Board", area : "acro"},
  {key: "OPR", value : "Office of  Primary Responsibility", area : "acro"},
  {key: "OSHA", value : "Occupational Safety and Health Administration", area : "acro"},
  {key: "PCS", value : "Permanent Change of Station", area : "acro"},
  {key: "PDM", value : "Programmed Depot Maintenance", area : "acro"},
  {key: "PM", value : "Program Manager ", area : "acro"},
  {key: "PPA-HQ", value : "Personal Property Headquarters Activity", area : "acro"},
  {key: "PPPO", value : "Personal Property Processing Office", area : "acro"},
  {key: "PPSO", value : "Personal Property Shipping Office", area : "acro"},
  {key: "QA", value : "Quality Assurance", area : "acro"},
  {key: "RCA", value : "Root Cause Analysis", area : "acro"},
  {key: "RDS", value : "Records Disposition Schedule", area : "acro"},
  {key: "RIE", value : "Rapid Identification Worksheet", area : "acro"},
  {key: "SIO", value : "Single Investigating Officer", area : "acro"},
  {key: "SME", value : "Subject Matter Expert", area : "acro"},
  {key: "SPO", value : "System Program Office", area : "acro"},
  {key: "ToC", value : "Theory of Constraints", area : "acro"},
  {key: "TSP", value : "Transportation Service Provider", area : "acro"},
  {key: "UDLM", value : "Unfunded Depot Level Maintenance", area : "acro"},
  {key: "USR", value : "Unit Safety Representative", area : "acro"},
  {key: "VPP", value : "Voluntary Protection Program", area : "acro"},
  {key: "WCD", value : "Work Control Document", area : "acro"},
  {key: "WIP", value : "Work In Process", area : "acro"},
  {key: "WR-ALC", value : "Warner Robbins Air Logistics Complex ", area : "acro"},


{key : "Art of the Possible (AoP)", value : "A constraints based managment system designed to create an environement for success by creating a culture of problem-solvers, defining processes (aka machines), eliminating constratints, and continously improving.  It is the framework for how the AFSC conducts business and how we strive to achieve world class results in warfighter support.", area : "gloss"},
{key : "AFTO-202", value : "Noncomforming Technical Assistance Request and Reply.  Process used in AFSC to request engineering disposition to a production process problem.", area : "gloss"},
{key : "Andon", value : "A signal used to call for help when an abnormal condition is recongized, or that some sort of action is required.  (Andon comes from an old Japanese word for paper lantern).", area : "gloss"},
{key : "Comfortable in Red", value : "Refers to the Willingness to set aggressive targets with the understanding the metrics will show as 'red' until process throughput efficiencies improve.", area : "gloss"},
{key : "Constraint", value : "The gate with the lowest throughput rate.", area : "gloss"},
{key : "Critical Path", value : "A sequence of activities in a project plan which must be completed by a specific time for the project to be completed on its needs date.  The AFSC adaption of this term refers to the linkage of critical elements in a process or project that keepan asset realistically moving forward toward completion.", area : "gloss"},
{key : "Flowtime", value : "The average time that a unit stays in a production machine.", area : "gloss"},
{key : "Implied Tasks", value : "Actions or activities not specifically stated but which must be accomplished to sucessfully complete the mission.", area : "gloss"},
{key : "Manloading", value : "A systematic assignment of personnel to jobs or tasks in an effiicient manner.", area : "gloss"},
{key : "Maturity Matrix", value : "AFSC method of measuring organizational maturity which regard to the a adaptation of principles found in the 'Execution' section of the AFSC Radiator Chart.", area : "gloss"},
{key : "Process Machine", value : "Refers to the science of the process and implies that any process can be gated in order to measure throughput and focus process improvment activities.", area : "gloss"},
{key : "Pull System", value : "A system where products, material or information is 'pulled' (once a demand is placed on the process step then it produces) by consumer requests through a production machine.", area : "gloss"},
{key : "Push System", value : "A system where products, material or information are pushed through a production machine based on past order history and decisions are based on logn term forecasts.", area : "gloss"},
{key : "Queue", value : "Assets awaiting induction to a process.  Also a WIP control tool in gated monitoring system.", area : "gloss"},
{key : "Radiator Chart", value : "Model depicting the fundamental components of the AoP methodology.", area : "gloss"},
{key : "Rapid Improvment Events (RIE)", value : "A Lean, 6 Sigma or ToC event that allows for root cause and the development of countermeasures in less that 5 days.  The preparation and implementation will occur outside of the RIE.", area : "gloss"},
{key : "Road To...", value : "Reflects the throughput-pace required for oth the interest of the customer and the organization.  The goal that sets the pace of the process.", area : "gloss"},
{key : "Root Cause Analysis (RCA)", value : "Tracing a problem to it origins.  If you only fix the symptoms, what you see on the surface, the problem will almost certainly happen again which will lead you to fix it, again, and again, and again.", area : "gloss"},
{key : "Specified Tasks", value : "Tasks direclty stated in the mission, by the next higher commander, or by law or regulation.", area : "gloss"},
{key : "Standard Work", value : "A detailed, documented and sometimes visual system by which members develop and follow a series of predefined process steps.", area : "gloss"},
{key : "Tactical Management", value : "An established frequent review of WIP flowing through the process machine.  It focuses on the individual items of WIP flwoing through the process machine rather than the process machine performance at the operational level.", area : "gloss"},
{key : "Takt Time", value : "The rate of customer demand, how often a single unit must be produced from a machine (takt is a German word for rhythm or meter).", area : "gloss"},
{key : "Theory of Constraints (ToC)", value : "1. Identify the system's contraint(s), 2. Decide how to exploit the system's constraint(s). 5. Return to step one but beware of inertia WIP.", area : "gloss"},
{key : "Throughput", value : "The required output of a production machine expressed in units per time.  Traditional definition based in ToC - The rate at which the system generates money through sales.", area : "gloss"},
{key : "Urgency Tools", value : "Process tools that allow an organization to react and quickly resovle constraints encountered during the process execution.", area : "gloss"},
{key : "Value Stream Analysis (VSA)", value : "A method of analyzing a value stream map to determine value add process steps as well as waste.", area : "gloss"},
{key : "Value Stream Map (VSM)", value : "A method of creating a simple diagram of the material and information flow that bring a product through a value system.", area : "gloss"},
{key : "Visual Managment", value : "The use of simple visual indicators to help people determine immediately whether they are working inside the standards or deviating form it, this must be done at the place where the work is done.", area : "gloss"},
{key : "Wall Walk", value : "A recurring process-focused review to understand process machine performance, to identify constraints, and to coordinate resolution.", area : "gloss"},

// Start of the handbook.
{key : "1. Chapter 1", value: "INTRODUCTION",
area: "handbook-pdf", page: 8},

{key : "1.1. What is Art of the Possible (AoP)?", value : "",
area: "handbook-pdf", page: 8},

{key : "1.1.1. Art of the Possible (AoP)", value : "1.1.1. Art of the Possible (AoP) is a constraints based management system designed to create an environment for success by: creating a culture of problem-solvers, defining processes (aka machines), eliminating constraints, and continuously improving.",
area: "handbook-pdf", page: 8},

{key : "1.1.2. AoP is the framework", value: "1.1.2. AoP is the framework for how the Air Force Sustainment Center (AFSC) conducts business and how we strive to achieve world class results in warfighter support. AoP is a deliberate, scientific approach to cost reduction through improved process control. Everything AFSC does is a process. All AFSC processes can be mapped and developed into process machines using flow principles:",
area: "handbook-pdf", page: 8},

{key : "1.1.2.1. All work is a process", value: "All work is a process and has flow.",
area: "handbook-pdf", page: 8},

{key : "1.1.2.2. Flow is defined", value: "Flow is defined through a critical path or critical chain.",
area: "handbook-pdf", page: 8},

{key : "1.1.2.3. Once a machine is set", value: "Once a machine is set, and displayed visually, it’s monitored for performance.",
area: "handbook-pdf", page: 8},

{key : "1.1.2.4. Find a constraint", value: "Find a constraint, fix the constraint…continue to monitor.",
area: "handbook-pdf", page: 8},

{key : "1.1.3. AoP is a methodical approach", value: "AoP is a methodical approach to our business; a science behind our operations that is based on sound “flow” principles utilizing a constraints based management philosophy that leads to a predictable output. AFSC processes are seen as machines that can be set up to have specific, predictable results once they are understood. Process machines are designed to exceed customer expectations, reduce Work In Process (WIP), and increase throughput to expose capacity for increased warfighter support. In addition, process machines must be customer focused and directly aligned with customer requirements. Daily identification and elimination of process constraints affecting the critical path or chain is necessary for success. Process machine performance is monitored through standard work and visual displays with \
a focus on Continuous Process Improvement (CPI) for more efficient processes and execution.",
area: "handbook-pdf", page: 8},

{key : "1.2. Why does AFSC practice AoP?", value: "",
area: "handbook-pdf", page: 9},

{key : "1.2.1 The bottome line:", value: "The bottom line: rising weapon system readiness costs. Weapon system sustainment costs are growing at an unsustainable rate. These costs determine the size of the force we can afford to sustain. The size of our force determines the ability to fight and win the next war. AFSC already performs well in effectiveness, now we need to focus on cost- effectiveness.",
area: "handbook-pdf", page: 9},

{key : "1.2.1.1. More readiness, same cost.", value: "More readiness, same cost.",
area: "handbook-pdf", page: 9},

{key : "1.2.1.2. Same readiness, less cost.", value: "Same readiness, less cost.",
area: "handbook-pdf", page: 9},

{key : "1.3. The Concept of Speed.", value: "",
area: "handbook-pdf", page: 9},

{key : "1.3.1. AoP accomplishes it's objectives", value: "AoP accomplishes it’s objectives by increasing speed. The term speed in AoP lexicon, is meant to be synonymous with efficient processes that promote throughput paced to a road to… (aka the burning platform). In its most basic sense, speed equals reduced flowtime. AoP creates a methodology that measures performance in a manner that focuses the organization on the weakest link in their processes. This focus leads to process improvement initiatives that affect the speed of throughput for the organizational process. Speed also means quickly resolving constraints that affect the critical path of the process during execution to enable the process to continue to move forward unhindered.",
area: "handbook-pdf", page: 9},

{key : "1.3.2.", value: "The AFSC could continue to follow the old way of doing business to complete our processes. However, considering time, money, space, manpower and other severe constraints facing us, we must leverage speed. AFSC’s workforce must not cling to an inefficient process out of a fear of change. We must free up limited resources by increasing the speed, in other words reducing wasted time and effort. Speed is not working faster; it is working more efficiently, and thereby increasing value for the warfighter.",
area: "handbook-pdf", page: 9},

{key : "1.3.3. The game plan, the tools,", value: "The game plan, the tools, the science, and the philosophies are all in support of increasing speed. With speed comes reduced WIP, with reduced WIP comes reduced resource requirements - less dock space, less shop space, less equipment, less labor costs, less supporting overhead. Speed is good. Focusing on speed provides the mechanism that will lead to reduced cost and increased capabilities for the Air Force.",
area: "handbook-pdf", page: 9},

{key : "1.3.4. It is very important to note that the concept of speed", value: "It is very important to note that the concept of speed, is not a speed at any cost proponent. It is not about hurrying, or cutting corners, nor is speed obtained on the backs of the workforce. Speed must be achieved through improved processes, an enterprise focus, and a common agreement and understanding of the goal of speed. Speed must be mindful of safety and quality. The AFSC recognizes that speed without quality is not beneficial; therefore the focus on speed is about understanding the processes that fuel our execution, both on and above the shop floor, and improving those processes with the goal of making the\
processes more expedient. AoP’s focus on efficiency serves to create speed while improving quality and safety – making quality and safety integral parts of the process.",
area: "handbook-pdf", page: 9},

{key : "1.4. What are the Core Tenets of AoP", value: "",
area: "handbook-pdf", page: 10},

{key : "1.4.1. The following six items are identified", value: "The following six items are identified as core tenets to AoP. Each of the core tenets will be broken down and explained in the subsequent chapters of this book:",
area: "handbook-pdf", page: 10},

{key : "1.4.1.1. Leadership Model", value: "Leadership Model – principles to create an environment for success.",
area: "handbook-pdf", page: 10},

{key : "1.4.1.2. Radiator Chart", value: "Radiator Chart - to optimize flow of products & services through entire process.",
area: "handbook-pdf", page: 10},

{key : "1.4.1.3. Establish Flow", value: "Establish Flow (includes flow principles).",
area: "handbook-pdf", page: 10},

{key : "1.4.1.4. Identify WIP.", value: "Identify WIP.",
area: "handbook-pdf", page: 10},

{key : "1.4.1.5. Identify Constraint", value: "Identify Constraint (includes wall walk, visual management, and data-driven decisions).",
area: "handbook-pdf", page: 10},

{key : "1.4.1.6. Resolve Constraint", value: "Resolve Constraint (Theory of Constraints (ToC), Lean, and Six Sigma will be used to resolve constraints).",
area: "handbook-pdf", page: 10},

{key : "1.4.2. The core tenets of AoP", value: "The core tenets of AoP ensure a standardized approach toward building process machines and the requirements necessary to operate them once they are established.",
area: "handbook-pdf", page: 10},

{key : "1.5. How Do I Implement AoP?", value: "",
area: "handbook-pdf", page: 10},

{key : "1.5.1. AFSC has designated five senior AoP Subject Matter Experts", value: "AFSC has designated five senior AoP Subject Matter Experts (SMEs) responsible for setting AoP doctrine and policy and have developed a standardized implementation plan all AFSC units can utilize to get started. The steps will be summarized here and broken down in detail in chapter six.",
area: "handbook-pdf", page: 10},

{key : "1.5.1.1. Step 1:", value: "Identify and define Mission Essential Task List (METL).",
area: "handbook-pdf", page: 10},

{key : "1.5.1.2. Step 2:", value: "Select one task for implementation.",
area: "handbook-pdf", page: 10},

{key : "1.5.1.3. Step 3:", value: "Define flow and WIP.",
area: "handbook-pdf", page: 10},

{key : "1.5.1.4. Step 4:", value: "Implement wall walks.",
area: "handbook-pdf", page: 10},

{key : "1.5.1.5. Step 5:", value: "Implement tactical management.",
area: "handbook-pdf", page: 10},

{key : "1.5.2. To reach our objective of operationalizing AoP accross the AFSC", value: "To reach our objective of operationalizing AoP across the AFSC, proactive engagement from leadership as change champions is essential. Focused leadership is the lynchpin that will enable AFSC to evolve our culture in support of a process improvement drive that is sanctioned by everyone. An engaged workforce vested in mission success is the\
catalyst for AoP results. Leaders focused on developing our people, improving our processes, and managing our resources will set our course. The combination of leadership, AoP core tenets, and process machine management create an environment for success and when properly managed, ensure unity of effort and unity of purpose within our organization.",
area: "handbook-pdf", page: 10},

{key : "2. Chapter 2", value: "LEADERSHIP MODEL",
area: "handbook-pdf", page: 12},

{key : "2.1. Introduction: AFSC has developed a Leadership Model", value: "Introduction: AFSC has developed a Leadership Model to communicate the vision that leadership culture is the foundation which creates the environment for success. “Therefore creating a leadership culture motivated to both initiate and achieve common goals with an emphasis on the ideals of developing people, managing resources and improving processes under the tenets of speed, safety, quality, \
and cost effectiveness while embodying the character traits of teamwork, accountability, respect, transparency, credibility, and engagement is essential in order to establish an environment for attaining art of the possible goals” (Litchfield, 2012). This model provides a valuable overview of the leadership ideals that is vital to the  successful  execution  of  the  AFSC  mission. It encompasses theory, behaviors, and recommended actions relating to some of the leadership, management, and supervisory considerations needed to be successful in AFSC’s complicated industrial environment. Our business is complex in many ways and requires a balanced approach to ensure we excel at all levels of the enterprise.",
area: "handbook-pdf", page: 12},

{key : "2.1.1. Sustaining weapon system readiness to generate airpower", value: "Sustaining weapon system readiness to generate airpower for America is AFSC’s mission and overarching focus. Successfully accomplishing our mission in a time of unprecedented challenges demands we achieve our full potential as we strive for art of the possible results. In an environment where organizations are struggling to survive, we are looking to thrive, lead, and exceed. \
We must provide greater military capability and improved readiness at less cost than ever before. It is not about working harder, cutting corners, or jeopardizing workplace safety; it is about recognizing opportunities, understanding, and eliminating true limiting constraints, improving processes, and maximizing available resources. To achieve our full potential, we must start with a common sight picture that focuses on creating an environment for success. The Leadership Model provides enduring principles to equip everyone with a holistic approach to gaining effectiveness and efficiency. By creating a leadership and management construct where teamwork, accountability, respect, transparency, credibility, and engagement are paramount, we create an environment where we can achieve art of the possible results. We must embrace a culture of performance that encompasses the individual, the agency, and the enterprise.",
area: "handbook-pdf", page: 12},

{key : "2.2. Leadership Model Breakdown", value: "",
area: "handbook-pdf", page: 12},

{key : "2.2.1. Common Goals: Common goals are the rallying point for everyone in AFSC.", value: "Common Goals: Common goals are the rallying point for everyone in AFSC. To drive success oriented behavior through the organization, these goals must be decomposed to relevant objectives and improvement areas that are meaningful at every level and every shop ensuring each work center has their own accountability to meet mission expectations. Common goals drive us to provide “best on the planet” sustainment support with the right capability at the least cost. It is imperative that both professional leaders and the professional workforce understand their specific work center goals and roles in meeting performance targets. We would not expect everyone in\
AFSC to recite a list of organizational goals, but each and every individual should understand what is expected in their work area and how they measure up against specific targets. Understanding roles and expectations allows everyone to know if we are winning and keeping our promises.",
area: "handbook-pdf", page: 12},

{key : "2.2.1.1. To reach these common goals", value: "To reach these common goals, we must foster a culture of transparency. We are not in the business of looking good, we have a mandate to be good; in fact, best on the planet. To foster that culture, senior leaders must identify the critical focus areas to achieve cutting-edge, innovative, and sustainable results from process improvement initiatives. Center team members need to define stretch goals that are out of reach of current performance levels and embrace creative and innovative thinking. Proactive engagement from leadership is essential as we evolve our culture to support a process improvement drive that is championed by everyone. An engaged workforce vested in mission success is the catalyst for art of the possible results.",
area: "handbook-pdf", page: 13},

{key : "2.2.2. People, Process and Resources:", value: "People, Process and Resources: Leadership focus on developing our people, managing resources, and improving processes will set our course.",
area: "handbook-pdf", page: 13},

{key : "2.2.2.1. People: The strength of our organization lies in our dedicated, competent, and professional workforce.", value: "People: The strength of our organization lies in our dedicated, competent, and professional workforce. As leaders, we have a responsibility to build confidence and trust   that   our  priorities\
balance both mission requirements		and workforce needs. Our workforce needs the right skills, training, education, and experience to tackle the challenges of today and	tomorrow. Developing both hard and soft skills is paramount to ensuring the workforce is ready to achieve mission success. Taking care of our people is the utmost priority.",
area: "handbook-pdf", page: 13},

{key : "2.2.2.1.1. A key principle of leadership is a commitment to the growth of people.", value: "A key principle of leadership is a commitment to the growth of people. A leadership focus requires that we develop employees who are equipped with knowledge that allows them to understand the enterprise, where they fit into the enterprise, and gives them the tools and opportunities to  think for themselves   by\
coming up with solutions to issues. Leaders can offer advice, provide direction, and share thought processes, but developing those around us involves letting others develop answers and the way forward. The key is participation and practice. If pre-determined solutions are dispensed or employees are always handed the answer, they do not learn to perform root cause analysis or think through and find the answer for themselves – they do not become thinkers or problem-solvers.",
area: "handbook-pdf", page: 13},

{key : "2.2.2.2. Processes: Direct leadership involement at all levels is the lynchpin that binds this model together", value: "Processes:   Direct leadership involvement at all levels is the lynchpin    that\
binds this model together and the force that will increase our abilities to meet our demanding mission. In our organization, leaders must understand their processes and maximize their resources to not only meet the overall mission objectives, but also strive to reduce organizational costs through AoP process controls. AFSC’s battle rhythm and performance reviews allow for review of key performance metrics and identification of gaps and areas for improvement at every level to monitor progress toward achieving common goals. Leaders\
in the center, regardless of position or function (strategic, operational, and tactical), will use AoP to target process constraints and will use CPI to resolve those constraints. Everyone in AFSC is accountable for improving the business and making today better than yesterday, while making tomorrow better than today.",
area: "handbook-pdf", page: 14}//,

// {key : "", value: "",
// area: "handbook-pdf", page: },
//
// {key : "", value: "",
// area: "handbook-pdf", page: },
//
// {key : "", value: "",
// area: "handbook-pdf", page: },
//
// {key : "", value: "",
// area: "handbook-pdf", page: },
]


function initalLoad(){

  $(".drag-target").on("swipeleft", function () {
    $("#sidenav-overlay").trigger("click");
  });

   $("#backButton").hide();
    $("#menuButton").hide();

   loadSidenav();
}

function loadSidenav()
{
  /*var sideNavButton = document.getElementById("menuButton");
  sideNavButton.setAttribute('data-activates', 'mobile-demo');
  sideNavButton.setAttribute('class', 'button-collapse');*/

    $('.button-collapse').sideNav({
    draggable:true,
    edge:'left'
  });
}

function closeSidenav()
{
  $('.button-collapse').sideNav('hide');
   $('.button-collapse').sideNav({
  closeOnClick: true
   });
}

function loadHome(){
  clearColor();
  closeGame();
  closeSidenav();
  //loadSidenav();
  $("#menuButton").show();
//  $("#backButton").css('display', 'none');
  $("#app_cont").load("content/home.html");
  $("#pageTitle").text('AoP');
  $("#app_cont").css('background-color', '#e0e0e0');
  $("#app_cont").css('height','100%');
  $('body').css('background-color', '#e0e0e0');
}

function clickNextSlide(){
  $('.slider').slider('next');
}

function clickPrevSlide(){
  $('.slider').slider('prev');
}

function loadSlide(n){
  clearColor();
  closeSidenav();
  $("#pageTitle").text('AOP Slides');
  animateArrow();
  $("#app_cont").load("content/slideScreen.html", function()
  {
    var numberList = document.getElementById("numberList");

    for(var i = slideIndex; i <= total; i++)
    {
      //create new li element
      var newNumberListItem = document.createElement("li");
      var numberListValue = document.createElement("div");
      var pageNumber = document.createElement("div");

      var progressBar = document.createElement("div");
      var myBar = document.createElement("div");
      progressBar.setAttribute("class", "row myProgress");
      myBar.setAttribute("class", "myBar");
      myBar.style.width = ((100/total) * i)  + '%';

      progressBar.appendChild(myBar);
      numberListValue.setAttribute("id", "slide" + i);
      numberListValue.setAttribute("class","imageStyle" );
      numberListValue.setAttribute("style", "background-image: url(/images/IntermediateLevelAoP/Slide"+i+".jpg)");
      pageNumber.setAttribute("id", "pageNumber");
      pageNumber.innerHTML = i + ' of ' + total;
      pageNumber.setAttribute("class", "positionNumber");
      newNumberListItem.appendChild(numberListValue);
      newNumberListItem.appendChild(progressBar);
      numberList.appendChild(newNumberListItem);

    }
    $('.slider').slider({interval:1000000000, indicator:true, });
  });
}

function loadCalculator(){
  clearColor();

  closeSidenav();
  $("#app_cont").load("content/calculator.html");
  $("#pageTitle").text("Little's Law Calculator");
  $("#calcLabel").css('color','#0EABDA');
  $("#app_cont").css('background-color', '#e0e0e0');
  $("#app_cont").css('height','100%');
  $('body').css('background-color', '#e0e0e0');
  //$("#calcsvg").css({ fill: "#ff0000" });

}

function loadCalculatorModal(){
  var defaultColor= "#424242";
  var pageTitle = $("#pageTitle").text();
  if(pageTitle !== "Little's Law Calculator"){
    $("#modal_content").load("content/calculator.html");
    $("#calcContainer").css('padding-top','0px');
    $("#calcLabel").css('color','#0EABDA');
    //$("#calcsvg").attr("fill","#0EABDA");
    $(".calculator").css("fill", "#0EABDA");
    //$("#calcsvg").css({fill: #0eABDA});
    //$("#calcsvg").css('color','#0EABDA');
    //$("#calcsvg").css({ fill: "#ff0000" });
    //$('#calcsvg').css({fill: defaultColor});
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');


    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');

  }


}

function loadSearchModal(){

    $("#modal_content").load("content/search.html");
    $("#searchContainer").css('padding-top','0px');
    //$("#calcLabel").css('color','#0EABDA');
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');


    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');


}

  function loadEmailModal(){

    $("#modal_content").load("content/email.html");
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');
      $(".mailIcon").css("fill", "#0EABDA");
    $("#mailLabel").css('color','#0EABDA');

    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');


  }

 function loadNotesModal(){

    $("#modal_content").load("content/notes.html");
    $("#app_cont").css('filter', 'blur(5px) grayscale(50%)');
    $(".eventNote").css("fill", "#0EABDA");
    $("#notesLabel").css('color','#0EABDA');
    $(document).ready(function(){
      $('#modal1').modal();
    });

    $('#modal1').modal({
      dismissible:false
    });
    $('#modal1').modal('open');


  }

function search(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].key === nameKey) {
        area = myArray[i].area;
        if(area === 'gloss')
        {
          firstLetter = nameKey[0].toUpperCase();
        }
        else {
          firstLetter = nameKey[0].toLowerCase();

        }

          return nameKey + " - " + myArray[i].value;
      }
    }
    return "No Result Found";
}

function clearSearchInput()
{
  $("#autocomplete-input").value="";
}

function loadResources(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/resources.html");
  $("#pageTitle").text("Resources");
  $("#menuButton").show();
  $("#backButton").hide();
  //add a transform for the lines.

}

function loadGettingStarted(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/gettingStarted.html");
  $("#pageTitle").text("Getting Started");
}

function loadNewsletter(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/newsletter.html");
  $("#pageTitle").text("Archived Newsletters");
}

function loadAboutUs(){
  clearColor();
  closeGame();

  closeSidenav();
  $("#app_cont").load("content/aboutUs.html");
  $("#pageTitle").text("About Us");
}

function clearColor(){
    var defaultColor= "#424242"
    $("#calcLabel").css('color',defaultColor);
    $('#calcsvg').css({fill: defaultColor});
    $(".calculator").css({fill: defaultColor});
    $(".eventNote").css({fill: defaultColor});
    $("#notesLabel").css('color',defaultColor);
     $(".mailIcon").css({fill: defaultColor});
    $("#mailLabel").css('color',defaultColor);
    $("#app_cont").css('background-color', '#e0e0e0');
    $("#app_cont").css('height','');
    $('body').css('background-color', '#e0e0e0');
    $("#app_cont").css('filter', '');

  }

function closeGame() {
  if(typeof car_S != 'undefined' && car_S !== null) {
    gameCleanup(car_S,'app_cont');
  }

  if(typeof exportRoot != 'undefined' && exportRoot !== null) {
    gameCleanup(exportRoot,'app_cont');
  }
}

function loadGame(){
  closeGame();
  closeSidenav();

  $(function(){
    $("#app_cont").empty();
    car_S = new p5(carSim,'app_cont');
  });
  $("#pageTitle").text("Activity");
}

function loadGame2(){
  closeGame();
  closeSidenav();
   $(function(){
    $("#app_cont").empty();
    car_S = new p5(convSim,'app_cont');
  });
  $("#pageTitle").text("Activity");
}

function loadGame3(){
  closeGame();
  closeSidenav();

  $(function(){
    $("#app_cont").empty();
    car_S = new p5(cPathSim,'app_cont');
  });
  $("#pageTitle").text("Activity");
}


function loadGuidance(){
  clearColor();
  closeGame();

  $("#app_cont").load("content/guidance.html");
  $("#pageTitle").text("Guidance");
  animateArrow();
}

function loadHandbook(page = 1){
  clearColor();
  closeGame();

  $("#app_cont").load("pdf/aop-handbook.pdf#page=" + page);
  $("#pageTitle").text("Handbook");
}

function loadAcronyms(){
  $('#modal1').modal('close');
  clearColor();
  closeGame();

  $("#app_cont").load("content/acronyms.html");
  $("#pageTitle").text("Acronyms");

  animateArrow();
}

function loadWallWalks(){
  clearColor();
  closeGame();

  $("#app_cont").load("content/wallWalks.html");
  $("#pageTitle").text("Wall Walks");

  animateArrow();
}

function animateArrow()
{
  $("#menuButton").hide();
    $("#backButton").show();

  var topPatty = document.getElementById("pat1");
  var bottomPatty = document.getElementById("pat3");
  topPatty.style="height:4px; width:24px; position:absolute; top:45%; left:15%";

  topPatty.style="transform:rotate(-45deg);width:15px; top:28%; left:14%;";
  bottomPatty.style="transform:rotate(45deg);width:15px; top:63%;";
}

function clickBackToResources()
{
  var burger1 = document.getElementById("bur1");
  var burger3 = document.getElementById("bur3");
  burger1.style="transform:rotate(-45deg);width:15px; top:28%; left:14%;"
  burger3.style="transform:rotate(45deg);width:15px; top:63%;";
  loadResources();
  resetArrow();
  burger1.style="tranform:rotate(45deg); width:24px; top:20%; left:15%;";
  burger3.style="tranform:rotate(-45deg); width:24px; top:70%; left:15%;";

}

function resetArrow()
{
  var topPatty = document.getElementById("pat1");
  var bottomPatty = document.getElementById("pat3");
  topPatty.style="transform:rotate(45deg);width:24px; top:45%; left:15%;";
  bottomPatty.style="tranform:rotate(-45deg); width:24px; top:70%; left:15%";
}
function loadTraining(){
  clearColor();
  closeSidenav();
  closeGame();

  $(function(){
    $("#app_cont").empty();

    var anim_container = document.createElement("div");
    anim_container.id = "animation_container";
    anim_container.style = "display: none; background-color:rgba(255, 255, 255, 1.00);";

    var canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.style = "position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);";

    var dom_overlay_container = document.createElement("div");
    dom_overlay_container.id = "dom_overlay_container";
    dom_overlay_container.style = "pointer-events:none; overflow:hidden; position: absolute; left: 0px; top: 0px; display: block;";

    anim_container.appendChild(canvas);
    anim_container.appendChild(dom_overlay_container);

    document.getElementById("app_cont").appendChild(anim_container);

    document.getElementById("animation_container").style.display = "block";

    init();

      var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("D8119AD668E9D44193ADA1BB18D6EFBE");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
  }
  function handleFileLoad(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
  }
  function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.LittlesLawAnimationWholeSeq();
    stage = new lib.Stage(canvas);
    stage.enableMouseOver();
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      stage.addChild(exportRoot);
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
      var lastW, lastH, lastS=1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = window.innerWidth, ih=window.innerHeight;
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
        if(isResp) {
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
            sRatio = lastS;
          }
          else if(!isScale) {
            if(iw<w || ih<h)
              sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==1) {
            sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }
        canvas.width = w*pRatio*sRatio;
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
        canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;
        stage.scaleY = pRatio*sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;
        stage.tickOnUpdate = false;
        stage.update();
        stage.tickOnUpdate = true;
      }
    }
    makeResponsive(true,'both',true,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }
  });
  $("#pageTitle").text("Training");
}
