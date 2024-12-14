# ProjectForTeacher

The task is to model number of invalids occurred during development of isolated tribe.
Let's consider the tribe development process, the focus will be on increasing of its population through time. 
The task is to simulate the amount of individuals with defected genes that appear during tribe development. 
The individual should be considered as having defected genes if his parents were relatives. 

Initial parameters could be:
1) number of individuals (females and males) in the tribe at the beginning;
2) maximum number of offspring that one individual can give during its lifetime(different for female and male);
3) probability that an individual will choose a mate from close relatives for one reproduction (an assumption is that male choose females, does not matter);
4) average age of one individual;
5) critical number of generations after which descendants of one branch cease to have common genes, i.e. are no longer considered relatives;
6) time parameter, representing period during which tribe development is investigated

QA PART:
----------------------------------------------------------------------------------------------------------------------------------------------------
Question:   
How long do women and men live? What is the distribution?  
Answer:      
The distributions of age for men and women should be different, though distributions come from the same family - Gaussian;  
parameters of those distributions are (mean_male_age, std_male_age) and (mean_female_age, std_female_age) respectfully for two normal distributions;  
these parameters of distribution need to be flexible, could be specified before simulation.   
----------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------
Question:
At what age can men and women have children?  And at what age can they no longer have children?
Answer:     
Those are parameters of simulation: minimal age need to start reproducing, maximum age allowed for reproducing.
----------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------
Question:  
Can I assume that a women and a man form a couple for the rest of their lives?  
Answer:   
For simplicity you can, I also though about that, but did not mention anything about it at the beginning...  
----------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------
Question:  
As I understand from the description, the genetic defect does not affect either lifespan or the ability to have offspring?  
Answer:     
Yes, you are right, it would introduce unneeded complexity into model.  
For baseline model take that assumtion as granted.  
----------------------------------------------------------------------------------------------------------------------------------------------------
