# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\comparison\compare.spec.ts >> Compare Staging vs Live
- Location: tests\comparison\compare.spec.ts:19:5

# Error details

```
Error: Image sizes do not match. Image 1 size: 40861440, image 2 size: 42174080
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic "Accessibility Menu":
    - button "Accessibility Menu" [ref=e3] [cursor=pointer]
  - banner [ref=e6]:
    - generic [ref=e15]:
      - generic "24/7 Emergency Service" [ref=e17] [cursor=pointer]:
        - img "Call to Action Image" [ref=e18]
        - generic [ref=e19]: 24/7 Emergency Service
      - generic [ref=e21]:
        - generic [ref=e22]: 
        - generic [ref=e23]: 
        - generic [ref=e24]: 
        - generic [ref=e25]: 
        - generic [ref=e26]: 
        - link "Read Our Reviews " [ref=e27] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com/about/reviews/
          - generic [ref=e28]: Read Our Reviews
          - generic [ref=e29]: 
      - link " Coupons & Offers " [ref=e32] [cursor=pointer]:
        - /url: https://morehartrdsstg.wpenginepowered.com/specials/
        - generic [ref=e33]: 
        - generic [ref=e34]: Coupons & Offers
        - generic [ref=e35]: 
    - generic [ref=e41]:
      - generic [ref=e44]:
        - link "logo" [ref=e46] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com
          - img "logo" [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - link "928-437-3602" [ref=e51] [cursor=pointer]:
              - /url: tel:+19284373602
            - link " Schedule ONLINE" [ref=e52] [cursor=pointer]:
              - /url: https://morehartrdsstg.wpenginepowered.com/schedule/
              - generic [ref=e53]: 
              - text: Schedule ONLINE
          - navigation [ref=e58]:
            - list [ref=e60]:
              - listitem [ref=e61]:
                - link "About Us" [ref=e62] [cursor=pointer]:
                  - /url: /about/
                  - text: About Us
                  - generic [ref=e64]: 
              - listitem [ref=e65]:
                - link "HVAC" [ref=e66] [cursor=pointer]:
                  - /url: https://morehartrdsstg.wpenginepowered.com/hvac-services-phoenix/
                  - text: HVAC
                  - generic [ref=e68]: 
                - text:     
              - listitem [ref=e69]:
                - link "Commercial" [ref=e70] [cursor=pointer]:
                  - /url: /commercial/
                  - text: Commercial
                  - generic [ref=e72]: 
                - text:  
              - listitem [ref=e73]:
                - link "Water Heaters" [ref=e74] [cursor=pointer]:
                  - /url: /water-heaters/
                  - text: Water Heaters
                  - generic [ref=e76]: 
      - text:                               
  - main [ref=e77]:
    - generic [ref=e78]:
      - generic [ref=e81]:
        - generic [ref=e86]:
          - generic [ref=e87]: Morehart Air Conditioning & Heating
          - generic [ref=e88]: Morehart, less hassle!
          - generic [ref=e89]: Expert Air Conditioning & Heating Services Near Peoria, AZ
          - link "view all offers " [ref=e90] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com/specials/
            - text: view all offers
            - generic [ref=e91]: 
        - generic [ref=e97]:
          - heading "Request Service" [level=2] [ref=e98]
          - generic [ref=e101]:
            - list [ref=e103]:
              - listitem [ref=e104]:
                - generic [ref=e105]:
                  - text: First Name
                  - generic [ref=e106]: "*"
                - textbox "First Name*" [ref=e108]
              - listitem [ref=e109]:
                - generic [ref=e110]:
                  - text: Last Name
                  - generic [ref=e111]: "*"
                - textbox "Last Name*" [ref=e113]
              - listitem [ref=e114]:
                - generic [ref=e115]:
                  - text: Email
                  - generic [ref=e116]: "*"
                - textbox "Email*" [ref=e118]
              - listitem [ref=e119]:
                - generic [ref=e120]:
                  - text: Phone
                  - generic [ref=e121]: "*"
                - textbox "Phone*" [ref=e123]
              - listitem [ref=e124]:
                - generic [ref=e125]: Service Needed
                - combobox "Service Needed" [ref=e127]:
                  - option "Heating"
                  - option "Cooling"
                  - option "Commercial"
                  - option "Air Quality"
                  - option "Water Heaters"
                  - option "Other"
              - listitem [ref=e128]:
                - generic [ref=e129]: Tell Us More
                - textbox "Tell Us More" [ref=e131]
              - listitem [ref=e132]:
                - list [ref=e134]:
                  - listitem [ref=e135]:
                    - checkbox "I consent to receive marketing text messages from Morehart Air Conditioning & Heating at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out." [ref=e136] [cursor=pointer]
                    - generic [ref=e137] [cursor=pointer]: I consent to receive marketing text messages from Morehart Air Conditioning & Heating at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
              - listitem [ref=e138]:
                - list [ref=e140]:
                  - listitem [ref=e141]:
                    - checkbox "I consent to receive non-marketing text messages from Morehart Air Conditioning & Heating about my order updates, appointment reminders etc. Message & data rates may." [ref=e142] [cursor=pointer]
                    - generic [ref=e143] [cursor=pointer]: I consent to receive non-marketing text messages from Morehart Air Conditioning & Heating about my order updates, appointment reminders etc. Message & data rates may.
            - button "Submit" [ref=e146] [cursor=pointer]
      - generic [ref=e149]:
        - text:          
        - generic [ref=e150]:
          - generic [ref=e154]:
            - group "2 / 5" [ref=e155]:
              - link " Heating" [ref=e156] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/heating/
                - generic [ref=e158]:
                  - generic [ref=e160]: 
                  - generic [ref=e162]: Heating
                  - generic: 
            - group "3 / 5" [ref=e163]:
              - link " Commercial HVAC" [ref=e164] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/commercial/
                - generic [ref=e166]:
                  - generic [ref=e168]: 
                  - generic [ref=e170]: Commercial HVAC
                  - generic: 
            - group "4 / 5" [ref=e171]:
              - link " indoor Air quality" [ref=e172] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/air-quality/
                - generic [ref=e174]:
                  - generic [ref=e176]: 
                  - generic [ref=e178]: indoor Air quality
                  - generic: 
            - group "5 / 5" [ref=e179]:
              - link " water heaters" [ref=e180] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/water-heaters/
                - generic [ref=e182]:
                  - generic [ref=e184]: 
                  - generic [ref=e186]: water heaters
                  - generic: 
            - group "1 / 5" [ref=e187]:
              - link " Air Conditioning" [ref=e188] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/air-conditioning/
                - generic [ref=e190]:
                  - generic [ref=e192]: 
                  - generic [ref=e194]: Air Conditioning
                  - generic: 
          - generic [ref=e195]:
            - button "Go to slide 1" [ref=e196] [cursor=pointer]
            - button "Go to slide 2" [ref=e197] [cursor=pointer]
            - button "Go to slide 3" [ref=e198] [cursor=pointer]
            - button "Go to slide 4" [ref=e199] [cursor=pointer]
            - button "Go to slide 5" [ref=e200] [cursor=pointer]
      - generic [ref=e207]:
        - generic [ref=e208]: Why Choose Morehart Air Conditioning & Heating? Trusted HVAC Services in Arizona
        - generic [ref=e210]:
          - group "1 / 6" [ref=e211]:
            - generic [ref=e216]: 24/7 Emergency Service
          - group "2 / 6" [ref=e217]:
            - generic [ref=e218]:
              - generic [ref=e221]: 
              - generic [ref=e222]: Affordable Maintenance Plans
          - group "3 / 6" [ref=e223]:
            - generic [ref=e224]:
              - generic [ref=e227]: 
              - generic [ref=e228]: Family Owned & Operated
          - group "4 / 6" [ref=e229]:
            - generic [ref=e230]:
              - generic [ref=e233]: 
              - generic [ref=e234]: Trained & Certified Technicians
          - group "5 / 6" [ref=e235]:
            - generic [ref=e236]:
              - generic [ref=e239]: 
              - generic [ref=e240]: Serving All Makes & Models
          - group "6 / 6" [ref=e241]:
            - generic [ref=e242]:
              - generic [ref=e245]: 
              - generic [ref=e246]: Community Focused
        - text:     
        - link "Learn more " [ref=e248] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com/about/
          - text: Learn more
          - generic [ref=e249]: 
      - generic [ref=e257]:
        - img "Homepage1 Image" [ref=e258]
        - heading "Expert Heating, Cooling & Hot Water Solutions for Your Home" [level=1] [ref=e259]
        - heading "Stay Comfortable Year-Round With Reliable HVAC & Water Heater Care" [level=2] [ref=e260]
        - paragraph [ref=e261]: Keeping your home comfortable is easier than ever when you choose Morehart Air Conditioning & Heating for all of your HVAC needs! Our team of highly trained technicians is committed to providing the highest-quality air conditioning, heating, and water heater services to our community in the greater Phoenix area. We proudly stand by our motto of “Morehart, Less Hassle,” so you can count on us to provide stress-free services and solutions that will last.
        - link "read more" [ref=e262] [cursor=pointer]:
          - /url: "#read_more"
          - generic [ref=e263]: read more
          - generic [ref=e264]: 
      - generic [ref=e265]:
        - generic [ref=e273]:
          - generic [ref=e275]: 
          - generic [ref=e276]:
            - text: Start Saving Today With a Maintenance Plan
            - generic [ref=e277]: Join Our Maintenance Membership
          - link "LEARN MORE " [ref=e279] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com/maintenance-plans/
            - text: LEARN MORE
            - generic [ref=e280]: 
        - generic [ref=e282]:
          - generic [ref=e287]:
            - generic [ref=e288]: Our Deals
            - generic [ref=e289]: save on your next today
            - generic [ref=e290]:
              - generic [ref=e292]:
                - group "1 / 2" [ref=e293]:
                  - generic [ref=e294]:
                    - generic [ref=e295]: Repairs With Annual Maintenance Agreement
                    - heading "10% OFF" [level=4] [ref=e296]
                    - generic "REDEEM OFFER" [ref=e297] [cursor=pointer]:
                      - text: REDEEM OFFER
                      - generic [ref=e298]: 
                    - generic [ref=e299]: Expires 05/31/2026
                    - generic [ref=e300]: "*Restrictions apply. Call us for details"
                - group "2 / 2" [ref=e301]:
                  - generic [ref=e302]:
                    - generic [ref=e303]: Preventative Maintenance Special
                    - heading "$79.95" [level=4] [ref=e304]
                    - generic "REDEEM OFFER" [ref=e305] [cursor=pointer]:
                      - text: REDEEM OFFER
                      - generic [ref=e306]: 
                    - generic [ref=e307]: Expires 05/31/2026
                    - generic [ref=e308]: "*Restriction apply. Call us for details"
              - text:  
              - link "See all coupons " [ref=e311] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/specials/
                - text: See all coupons
                - generic [ref=e312]: 
          - text:   
      - generic [ref=e321]:
        - generic [ref=e322]: Contact Us
        - generic [ref=e325]:
          - list [ref=e327]:
            - listitem [ref=e328]:
              - generic [ref=e329]:
                - text: First Name
                - generic [ref=e330]: "*"
              - textbox "First Name*" [ref=e332] [cursor=pointer]
            - listitem [ref=e333]:
              - generic [ref=e334]:
                - text: Last Name
                - generic [ref=e335]: "*"
              - textbox "Last Name*" [ref=e337] [cursor=pointer]
            - listitem [ref=e338]:
              - generic [ref=e339]:
                - text: Email
                - generic [ref=e340]: "*"
              - textbox "Email*" [ref=e342] [cursor=pointer]
            - listitem [ref=e343]:
              - generic [ref=e344]:
                - text: Phone
                - generic [ref=e345]: "*"
              - textbox "Phone*" [ref=e347] [cursor=pointer]
            - listitem [ref=e348]:
              - generic [ref=e349]: Service Needed
              - combobox "Service Needed" [ref=e351] [cursor=pointer]:
                - option "Heating"
                - option "Cooling"
                - option "Commercial"
                - option "Air Quality"
                - option "Water Heaters"
                - option "Other"
            - listitem [ref=e352]:
              - generic [ref=e353]: Tell Us More
              - textbox "Tell Us More" [ref=e355] [cursor=pointer]
            - listitem [ref=e356]:
              - list [ref=e358]:
                - listitem [ref=e359]:
                  - checkbox "I consent to receive marketing text messages from Morehart Air Conditioning & Heating at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out." [ref=e360] [cursor=pointer]
                  - generic [ref=e361] [cursor=pointer]: I consent to receive marketing text messages from Morehart Air Conditioning & Heating at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
            - listitem [ref=e362]:
              - list [ref=e364]:
                - listitem [ref=e365]:
                  - checkbox "I consent to receive non-marketing text messages from Morehart Air Conditioning & Heating about my order updates, appointment reminders etc. Message & data rates may." [ref=e366] [cursor=pointer]
                  - generic [ref=e367] [cursor=pointer]: I consent to receive non-marketing text messages from Morehart Air Conditioning & Heating about my order updates, appointment reminders etc. Message & data rates may.
          - button "Submit" [ref=e370] [cursor=pointer]
      - generic [ref=e377]:
        - img "Review Image" [ref=e379]
        - generic [ref=e380]:
          - heading "Our Reviews" [level=5] [ref=e381]
          - heading "See What Your Neighbors Are Saying" [level=4] [ref=e382]
          - generic [ref=e383]:
            - generic [ref=e384]: 
            - generic [ref=e385]: 
            - generic [ref=e386]: 
            - generic [ref=e387]: 
            - generic [ref=e388]: 
            - generic [ref=e389]: 
          - generic [ref=e391]:
            - group "1 / 5" [ref=e392]:
              - paragraph [ref=e393]: Our A/C unit stopped cooling around 4:30 to 5pm. I called Morehart around 5:30pm & their service tech, John, was here by 6pm. He had our system running again within an hour. He was very pleasant & professional. We'll always use Morehart.
              - generic [ref=e394]:
                - strong [ref=e395]: Carolyn M.
                - paragraph
            - group "2 / 5" [ref=e396]:
              - paragraph [ref=e397]: Thomas was awesome! He showed up in under 45 minutes after hours and was able to diagnose the issue within 30 minutes! Mayley was super sweet and communicated with us while she worked on getting Thomas out to us. So grateful we use such an awesome company for our HVAC issues.
              - generic [ref=e398]:
                - strong [ref=e399]: Amanda K.
                - paragraph
            - group "3 / 5" [ref=e400]:
              - paragraph [ref=e401]: I have relied on and trusted Brian Sturgeon at Morehart for all of my residential and commercial air conditioning and heating needs for the past 14 years. Brian is great, he's always on time, friendly, and keeps me informed of my unit’s status and any issues he finds. Morehart also offers great service plans to keep your system running.
              - generic [ref=e402]:
                - strong [ref=e403]: Michelle B.
                - paragraph
            - group "4 / 5" [ref=e404]:
              - paragraph [ref=e405]: Morehart is a family-owned business that strives to provide the best service for customers and clients. The owner Josh Is a hard-working individual who’s not afraid to go to work in the field with his team to ensure the best service possible. I highly recommend this company.
              - generic [ref=e406]:
                - strong [ref=e407]: Paul D.
                - paragraph
            - group "5 / 5" [ref=e408]:
              - paragraph [ref=e409]: I have been a customer for more than 10 years and always have excellent service. Brian, John, Josh, and the rest of their staff are great. I recommend Morehart to everyone who asks about A/C, heating, and hot water systems. These guys are awesome!
              - generic [ref=e410]:
                - strong [ref=e411]: Roger R.
                - paragraph
          - generic [ref=e412]:
            - button "Go to slide 1" [ref=e413] [cursor=pointer]
            - button "Go to slide 2" [ref=e414] [cursor=pointer]
            - button "Go to slide 3" [ref=e415] [cursor=pointer]
            - button "Go to slide 4" [ref=e416] [cursor=pointer]
            - button "Go to slide 5" [ref=e417] [cursor=pointer]
          - link "Read More reviews " [ref=e419] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com/about/reviews/
            - text: Read More reviews
            - generic [ref=e420]: 
      - generic [ref=e427]:
        - generic [ref=e428]:
          - text: We're Hiring
          - generic [ref=e429]: Join Our Growing Team
        - link "Learn More " [ref=e431] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com/about/careers/
          - text: Learn More
          - generic [ref=e432]: 
      - generic [ref=e439]:
        - img "company-truck" [ref=e442]
        - generic [ref=e443]:
          - heading "Elevate Your Arizona Home's Comfort" [level=4] [ref=e444]
          - heading "Trusted HVAC & Water Heater Services in Phoenix" [level=5] [ref=e445]
          - generic [ref=e446]:
            - list [ref=e447]:
              - listitem [ref=e448]: Air conditioning repairs, replacements, and maintenance
              - listitem [ref=e449]: Expert heating services for furnaces and heat pumps
              - listitem [ref=e450]: Indoor air quality solutions for cleaner, healthier air
              - listitem [ref=e451]: Water heater services for standard and tankless models
              - listitem [ref=e452]: Top-quality commercial HVAC services for businesses
            - generic [ref=e453]:
              - link "learn more " [ref=e454] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/about/
                - text: learn more
                - generic [ref=e455]: 
              - text: 
      - generic [ref=e464]:
        - generic [ref=e465]: Proudly Serving
        - generic [ref=e466]: The Greater Phoenix Area
        - paragraph [ref=e469]: Avondale | Chandler | Gilbert | Glendale | Goodyear | Mesa | Peoria | Phoenix | Scottsdale | Tempe
        - link "View More " [ref=e471] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com/service-areas/
          - generic [ref=e472]: View More
          - generic [ref=e473]: 
      - generic [ref=e480]:
        - generic [ref=e483]:
          - group "1 / 4" [ref=e484]:
            - img "affilation" [ref=e486]
          - group "2 / 4" [ref=e487]:
            - img "affilation" [ref=e489]
          - group "3 / 4" [ref=e490]:
            - img "affilation" [ref=e492]
          - group "4 / 4" [ref=e493]:
            - img "affilation" [ref=e495]
        - text:  
  - contentinfo [ref=e496]:
    - generic [ref=e503]:
      - generic [ref=e506]:
        - generic [ref=e507]:
          - link "logo" [ref=e508] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com
            - img "logo" [ref=e509]
          - generic [ref=e511]:
            - generic [ref=e513]: 
            - link "928-437-3602" [ref=e514] [cursor=pointer]:
              - /url: tel:+19284373602
          - generic [ref=e516]:
            - generic [ref=e517]:
              - generic [ref=e518]: 
              - text: "License:"
            - generic [ref=e520]: ROC LIC# 280802
        - generic [ref=e521]:
          - heading "Quick Links" [level=6] [ref=e522]
          - generic [ref=e523]:
            - list [ref=e525]:
              - listitem [ref=e526]:
                - link "Air Conditioning" [ref=e527] [cursor=pointer]:
                  - /url: /air-conditioning/
              - listitem [ref=e528]:
                - link "Heating" [ref=e529] [cursor=pointer]:
                  - /url: /heating/
              - listitem [ref=e530]:
                - link "Indoor Air Quality" [ref=e531] [cursor=pointer]:
                  - /url: /air-quality/
              - listitem [ref=e532]:
                - link "Water Heaters" [ref=e533] [cursor=pointer]:
                  - /url: /water-heaters/
              - listitem [ref=e534]:
                - link "Commercial" [ref=e535] [cursor=pointer]:
                  - /url: /commercial/
            - list [ref=e537]:
              - listitem [ref=e538]:
                - link "About Us" [ref=e539] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e540]:
                - link "Careers" [ref=e541] [cursor=pointer]:
                  - /url: /about/careers/
              - listitem [ref=e542]:
                - link "Maintenance Plans" [ref=e543] [cursor=pointer]:
                  - /url: /maintenance-plans/
              - listitem [ref=e544]:
                - link "Service Area" [ref=e545] [cursor=pointer]:
                  - /url: /service-areas/
              - listitem [ref=e546]:
                - link "Specials" [ref=e547] [cursor=pointer]:
                  - /url: /specials/
        - generic [ref=e549]:
          - generic [ref=e550]:
            - heading "Office location" [level=6] [ref=e551]
            - paragraph [ref=e552]:
              - text: 8853 N. 78th Ave.
              - text: Peoria, AZ 85345
          - generic [ref=e553]:
            - generic [ref=e554]: Follow Us
            - generic [ref=e555]:
              - link "" [ref=e556] [cursor=pointer]:
                - /url: https://www.facebook.com/MorehartACandHeating
                - generic [ref=e557]: 
              - link "" [ref=e558] [cursor=pointer]:
                - /url: https://www.instagram.com/morehartacandheating/
                - generic [ref=e559]: 
            - link "Contact Us" [ref=e560] [cursor=pointer]:
              - /url: https://morehartrdsstg.wpenginepowered.com/contact/
      - generic [ref=e562]:
        - generic [ref=e563]: 
        - text: 2026 Morehart Air Conditioning & Heating
        - generic [ref=e564]: "|"
        - generic [ref=e565]:
          - text: Web Design and Internet Marketing by
          - link "RYNO Strategic Solutions." [ref=e566] [cursor=pointer]:
            - /url: https://rynoss.com/?utm_source=RYNO+Built+Website&utm_medium=Referral&utm_campaign=Client_Website_Footer_Backlink
        - generic [ref=e567]: "|"
        - generic [ref=e568]:
          - link "Disclaimer" [ref=e569] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e570]: "|"
          - link "Privacy Policy" [ref=e571] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com/privacy-policy/
      - text:   
  - generic [ref=e572]: desktop
```

# Test source

```ts
  1  | import fs from 'fs';
  2  | 
  3  | import pixelmatch from 'pixelmatch';
  4  | 
  5  | import { PNG } from 'pngjs';
  6  | 
  7  | export async function compareScreenshots(
  8  |   stagingPath: string,
  9  |   livePath: string,
  10 |   diffPath: string
  11 | ) {
  12 | 
  13 |   const staging = PNG.sync.read(
  14 |     fs.readFileSync(stagingPath)
  15 |   );
  16 | 
  17 |   const live = PNG.sync.read(
  18 |     fs.readFileSync(livePath)
  19 |   );
  20 | 
  21 |   console.log(
  22 |     'Staging size:',
  23 |     staging.width,
  24 |     staging.height
  25 |   );
  26 | 
  27 |   console.log(
  28 |     'Live size:',
  29 |     live.width,
  30 |     live.height
  31 |   );
  32 | 
  33 |   // Use minimum shared dimensions
  34 |   const width = Math.min(
  35 |     staging.width,
  36 |     live.width
  37 |   );
  38 | 
  39 |   const height = Math.min(
  40 |     staging.height,
  41 |     live.height
  42 |   );
  43 | 
  44 |   const diff = new PNG({
  45 |     width,
  46 |     height,
  47 |   });
  48 | 
> 49 |   const mismatchedPixels = pixelmatch(
     |                                      ^ Error: Image sizes do not match. Image 1 size: 40861440, image 2 size: 42174080
  50 |     staging.data,
  51 |     live.data,
  52 |     diff.data,
  53 |     width,
  54 |     height,
  55 |     {
  56 |       threshold: 0.1,
  57 |     }
  58 |   );
  59 | 
  60 |   fs.writeFileSync(
  61 |     diffPath,
  62 |     PNG.sync.write(diff)
  63 |   );
  64 | 
  65 |   const totalPixels = width * height;
  66 | 
  67 |   const mismatchPercentage =
  68 |     (mismatchedPixels / totalPixels) * 100;
  69 | 
  70 |   return {
  71 |     mismatchedPixels,
  72 |     mismatchPercentage,
  73 |   };
  74 | }
```