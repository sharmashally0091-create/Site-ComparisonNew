# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\comparison\compare.spec.ts >> Compare Staging vs Live
- Location: tests\comparison\compare.spec.ts:19:5

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 50
Received:   64.45705549699677
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
            - link "602-512-9796" [ref=e51] [cursor=pointer]:
              - /url: tel:+16025129796
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
          - generic [ref=e151]:
            - generic:          
          - generic [ref=e152]:
            - button "Go to slide 1" [ref=e153] [cursor=pointer]
            - button "Go to slide 2" [ref=e154] [cursor=pointer]
            - button "Go to slide 3" [ref=e155] [cursor=pointer]
            - button "Go to slide 4" [ref=e156] [cursor=pointer]
            - button "Go to slide 5" [ref=e157] [cursor=pointer]
      - generic [ref=e164]:
        - generic [ref=e165]: Why Choose Morehart Air Conditioning & Heating? Trusted HVAC Services in Arizona
        - generic [ref=e167]:
          - group "1 / 6" [ref=e168]:
            - generic [ref=e173]: 24/7 Emergency Service
          - group "2 / 6" [ref=e174]:
            - generic [ref=e175]:
              - generic [ref=e178]: 
              - generic [ref=e179]: Affordable Maintenance Plans
          - group "3 / 6" [ref=e180]:
            - generic [ref=e181]:
              - generic [ref=e184]: 
              - generic [ref=e185]: Family Owned & Operated
          - group "4 / 6" [ref=e186]:
            - generic [ref=e187]:
              - generic [ref=e190]: 
              - generic [ref=e191]: Trained & Certified Technicians
          - group "5 / 6" [ref=e192]:
            - generic [ref=e193]:
              - generic [ref=e196]: 
              - generic [ref=e197]: Serving All Makes & Models
          - group "6 / 6" [ref=e198]:
            - generic [ref=e199]:
              - generic [ref=e202]: 
              - generic [ref=e203]: Community Focused
        - text:     
        - link "Learn more " [ref=e205] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com/about/
          - text: Learn more
          - generic [ref=e206]: 
      - generic [ref=e214]:
        - img "Homepage1 Image" [ref=e215]
        - heading "Expert Heating, Cooling & Hot Water Solutions for Your Home" [level=1] [ref=e216]
        - heading "Stay Comfortable Year-Round With Reliable HVAC & Water Heater Care" [level=2] [ref=e217]
        - paragraph [ref=e218]: Keeping your home comfortable is easier than ever when you choose Morehart Air Conditioning & Heating for all of your HVAC needs! Our team of highly trained technicians is committed to providing the highest-quality air conditioning, heating, and water heater services to our community in the greater Phoenix area. We proudly stand by our motto of “Morehart, Less Hassle,” so you can count on us to provide stress-free services and solutions that will last.
        - link "read more" [ref=e219] [cursor=pointer]:
          - /url: "#read_more"
          - generic [ref=e220]: read more
          - generic [ref=e221]: 
      - generic [ref=e222]:
        - generic [ref=e230]:
          - generic [ref=e232]: 
          - generic [ref=e233]:
            - text: Start Saving Today With a Maintenance Plan
            - generic [ref=e234]: Join Our Maintenance Membership
          - link "LEARN MORE " [ref=e236] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com/maintenance-plans/
            - text: LEARN MORE
            - generic [ref=e237]: 
        - generic [ref=e239]:
          - generic [ref=e244]:
            - generic [ref=e245]: Our Deals
            - generic [ref=e246]: save on your next today
            - generic [ref=e247]:
              - generic [ref=e249]:
                - group "1 / 2" [ref=e250]:
                  - generic [ref=e251]:
                    - generic [ref=e252]: Repairs With Annual Maintenance Agreement
                    - heading "10% OFF" [level=4] [ref=e253]
                    - generic "REDEEM OFFER" [ref=e254] [cursor=pointer]:
                      - text: REDEEM OFFER
                      - generic [ref=e255]: 
                    - generic [ref=e256]: Expires 05/31/2026
                    - generic [ref=e257]: "*Restrictions apply. Call us for details"
                - group "2 / 2" [ref=e258]:
                  - generic [ref=e259]:
                    - generic [ref=e260]: Preventative Maintenance Special
                    - heading "$79.95" [level=4] [ref=e261]
                    - generic "REDEEM OFFER" [ref=e262] [cursor=pointer]:
                      - text: REDEEM OFFER
                      - generic [ref=e263]: 
                    - generic [ref=e264]: Expires 05/31/2026
                    - generic [ref=e265]: "*Restriction apply. Call us for details"
              - text:  
              - link "See all coupons " [ref=e268] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/specials/
                - text: See all coupons
                - generic [ref=e269]: 
          - text:   
      - generic [ref=e278]:
        - generic [ref=e279]: Contact Us
        - generic [ref=e282]:
          - list [ref=e284]:
            - listitem [ref=e285]:
              - generic [ref=e286]:
                - text: First Name
                - generic [ref=e287]: "*"
              - textbox "First Name*" [ref=e289] [cursor=pointer]
            - listitem [ref=e290]:
              - generic [ref=e291]:
                - text: Last Name
                - generic [ref=e292]: "*"
              - textbox "Last Name*" [ref=e294] [cursor=pointer]
            - listitem [ref=e295]:
              - generic [ref=e296]:
                - text: Email
                - generic [ref=e297]: "*"
              - textbox "Email*" [ref=e299] [cursor=pointer]
            - listitem [ref=e300]:
              - generic [ref=e301]:
                - text: Phone
                - generic [ref=e302]: "*"
              - textbox "Phone*" [ref=e304] [cursor=pointer]
            - listitem [ref=e305]:
              - generic [ref=e306]: Service Needed
              - combobox "Service Needed" [ref=e308] [cursor=pointer]:
                - option "Heating"
                - option "Cooling"
                - option "Commercial"
                - option "Air Quality"
                - option "Water Heaters"
                - option "Other"
            - listitem [ref=e309]:
              - generic [ref=e310]: Tell Us More
              - textbox "Tell Us More" [ref=e312] [cursor=pointer]
            - listitem [ref=e313]:
              - list [ref=e315]:
                - listitem [ref=e316]:
                  - checkbox "I consent to receive marketing text messages from Morehart Air Conditioning & Heating at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out." [ref=e317] [cursor=pointer]
                  - generic [ref=e318] [cursor=pointer]: I consent to receive marketing text messages from Morehart Air Conditioning & Heating at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
            - listitem [ref=e319]:
              - list [ref=e321]:
                - listitem [ref=e322]:
                  - checkbox "I consent to receive non-marketing text messages from Morehart Air Conditioning & Heating about my order updates, appointment reminders etc. Message & data rates may." [ref=e323] [cursor=pointer]
                  - generic [ref=e324] [cursor=pointer]: I consent to receive non-marketing text messages from Morehart Air Conditioning & Heating about my order updates, appointment reminders etc. Message & data rates may.
          - button "Submit" [ref=e327] [cursor=pointer]
      - generic [ref=e334]:
        - img "Review Image" [ref=e336]
        - generic [ref=e337]:
          - heading "Our Reviews" [level=5] [ref=e338]
          - heading "See What Your Neighbors Are Saying" [level=4] [ref=e339]
          - generic [ref=e340]:
            - generic [ref=e341]: 
            - generic [ref=e342]: 
            - generic [ref=e343]: 
            - generic [ref=e344]: 
            - generic [ref=e345]: 
            - generic [ref=e346]: 
          - generic [ref=e347]:
            - button "Go to slide 1" [ref=e348] [cursor=pointer]
            - button "Go to slide 2" [ref=e349] [cursor=pointer]
            - button "Go to slide 3" [ref=e350] [cursor=pointer]
            - button "Go to slide 4" [ref=e351] [cursor=pointer]
            - button "Go to slide 5" [ref=e352] [cursor=pointer]
          - link "Read More reviews " [ref=e354] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com/about/reviews/
            - text: Read More reviews
            - generic [ref=e355]: 
      - generic [ref=e362]:
        - generic [ref=e363]:
          - text: We're Hiring
          - generic [ref=e364]: Join Our Growing Team
        - link "Learn More " [ref=e366] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com/about/careers/
          - text: Learn More
          - generic [ref=e367]: 
      - generic [ref=e374]:
        - img "company-truck" [ref=e377]
        - generic [ref=e378]:
          - heading "Elevate Your Arizona Home's Comfort" [level=4] [ref=e379]
          - heading "Trusted HVAC & Water Heater Services in Phoenix" [level=5] [ref=e380]
          - generic [ref=e381]:
            - list [ref=e382]:
              - listitem [ref=e383]: Air conditioning repairs, replacements, and maintenance
              - listitem [ref=e384]: Expert heating services for furnaces and heat pumps
              - listitem [ref=e385]: Indoor air quality solutions for cleaner, healthier air
              - listitem [ref=e386]: Water heater services for standard and tankless models
              - listitem [ref=e387]: Top-quality commercial HVAC services for businesses
            - generic [ref=e388]:
              - link "learn more " [ref=e389] [cursor=pointer]:
                - /url: https://morehartrdsstg.wpenginepowered.com/about/
                - text: learn more
                - generic [ref=e390]: 
              - text: 
      - generic [ref=e399]:
        - generic [ref=e400]: Proudly Serving
        - generic [ref=e401]: The Greater Phoenix Area
        - paragraph [ref=e404]: Avondale | Chandler | Gilbert | Glendale | Goodyear | Mesa | Peoria | Phoenix | Scottsdale | Tempe
        - link "View More " [ref=e406] [cursor=pointer]:
          - /url: https://morehartrdsstg.wpenginepowered.com/service-areas/
          - generic [ref=e407]: View More
          - generic [ref=e408]: 
      - generic [ref=e414]:
        - generic:  
  - contentinfo [ref=e415]:
    - generic [ref=e422]:
      - generic [ref=e425]:
        - generic [ref=e426]:
          - link "logo" [ref=e427] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com
            - img "logo" [ref=e428]
          - generic [ref=e430]:
            - generic [ref=e432]: 
            - link "602-512-9796" [ref=e433] [cursor=pointer]:
              - /url: tel:+16025129796
          - generic [ref=e435]:
            - generic [ref=e436]:
              - generic [ref=e437]: 
              - text: "License:"
            - generic [ref=e439]: ROC LIC# 280802
        - generic [ref=e440]:
          - heading "Quick Links" [level=6] [ref=e441]
          - generic [ref=e442]:
            - list [ref=e444]:
              - listitem [ref=e445]:
                - link "Air Conditioning" [ref=e446] [cursor=pointer]:
                  - /url: /air-conditioning/
              - listitem [ref=e447]:
                - link "Heating" [ref=e448] [cursor=pointer]:
                  - /url: /heating/
              - listitem [ref=e449]:
                - link "Indoor Air Quality" [ref=e450] [cursor=pointer]:
                  - /url: /air-quality/
              - listitem [ref=e451]:
                - link "Water Heaters" [ref=e452] [cursor=pointer]:
                  - /url: /water-heaters/
              - listitem [ref=e453]:
                - link "Commercial" [ref=e454] [cursor=pointer]:
                  - /url: /commercial/
            - list [ref=e456]:
              - listitem [ref=e457]:
                - link "About Us" [ref=e458] [cursor=pointer]:
                  - /url: /about/
              - listitem [ref=e459]:
                - link "Careers" [ref=e460] [cursor=pointer]:
                  - /url: /about/careers/
              - listitem [ref=e461]:
                - link "Maintenance Plans" [ref=e462] [cursor=pointer]:
                  - /url: /maintenance-plans/
              - listitem [ref=e463]:
                - link "Service Area" [ref=e464] [cursor=pointer]:
                  - /url: /service-areas/
              - listitem [ref=e465]:
                - link "Specials" [ref=e466] [cursor=pointer]:
                  - /url: /specials/
        - generic [ref=e468]:
          - generic [ref=e469]:
            - heading "Office location" [level=6] [ref=e470]
            - paragraph [ref=e471]:
              - text: 8853 N. 78th Ave.
              - text: Peoria, AZ 85345
          - generic [ref=e472]:
            - generic [ref=e473]: Follow Us
            - generic [ref=e474]:
              - link "" [ref=e475] [cursor=pointer]:
                - /url: https://www.facebook.com/MorehartACandHeating
                - generic [ref=e476]: 
              - link "" [ref=e477] [cursor=pointer]:
                - /url: https://www.instagram.com/morehartacandheating/
                - generic [ref=e478]: 
            - link "Contact Us" [ref=e479] [cursor=pointer]:
              - /url: https://morehartrdsstg.wpenginepowered.com/contact/
      - generic [ref=e481]:
        - generic [ref=e482]: 
        - text: 2026 Morehart Air Conditioning & Heating
        - generic [ref=e483]: "|"
        - generic [ref=e484]:
          - text: Web Design and Internet Marketing by
          - link "RYNO Strategic Solutions." [ref=e485] [cursor=pointer]:
            - /url: https://rynoss.com/?utm_source=RYNO+Built+Website&utm_medium=Referral&utm_campaign=Client_Website_Footer_Backlink
        - generic [ref=e486]: "|"
        - generic [ref=e487]:
          - link "Disclaimer" [ref=e488] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e489]: "|"
          - link "Privacy Policy" [ref=e490] [cursor=pointer]:
            - /url: https://morehartrdsstg.wpenginepowered.com/privacy-policy/
      - text:   
  - generic [ref=e491]: desktop
```

# Test source

```ts
  86  | 
  87  |   await live.setViewportSize({
  88  |     width: 1440,
  89  |     height: 900,
  90  |   });
  91  | 
  92  |   // Scroll to top before screenshot
  93  |   await staging.evaluate(() => {
  94  |     window.scrollTo(0, 0);
  95  |   });
  96  | 
  97  |   await live.evaluate(() => {
  98  |     window.scrollTo(0, 0);
  99  |   });
  100 | 
  101 |   // Extra stabilization
  102 |   await staging.waitForTimeout(2000);
  103 | 
  104 |   await live.waitForTimeout(2000);
  105 | 
  106 |   // Validate images
  107 |   const stagingBrokenImages =
  108 |     await validateImages(staging);
  109 | 
  110 |   const liveBrokenImages =
  111 |     await validateImages(live);
  112 | 
  113 |   console.log(
  114 |     'Broken staging images:',
  115 |     stagingBrokenImages
  116 |   );
  117 | 
  118 |   console.log(
  119 |     'Broken live images:',
  120 |     liveBrokenImages
  121 |   );
  122 | 
  123 |   // DOM extraction
  124 |   const stagingDOM =
  125 |     await getCleanDOM(staging);
  126 | 
  127 |   const liveDOM =
  128 |     await getCleanDOM(live);
  129 | 
  130 |   // Extract sections
  131 |   const stagingSections =
  132 |     extractSections(stagingDOM);
  133 | 
  134 |   const liveSections =
  135 |     extractSections(liveDOM);
  136 | 
  137 |   // Compare sections
  138 |   const missingSections =
  139 |     compareSections(
  140 |       stagingSections,
  141 |       liveSections
  142 |     );
  143 | 
  144 |   console.log(
  145 |     'Missing sections:',
  146 |     missingSections
  147 |   );
  148 | 
  149 |   // Capture screenshots
  150 |   await capturePageScreenshot(
  151 |     staging,
  152 |     'snapshots/staging/home.png'
  153 |   );
  154 | 
  155 |   await capturePageScreenshot(
  156 |     live,
  157 |     'snapshots/live/home.png'
  158 |   );
  159 | 
  160 |   // Visual comparison
  161 |   console.log(
  162 |     'Running visual comparison...'
  163 |   );
  164 | 
  165 |   const visualResult =
  166 |     await compareScreenshots(
  167 |       'snapshots/staging/home.png',
  168 |       'snapshots/live/home.png',
  169 |       'snapshots/diff/home-diff.png'
  170 |     );
  171 | 
  172 |   console.log(
  173 |     'Mismatch Percentage:',
  174 |     visualResult.mismatchPercentage
  175 |   );
  176 | 
  177 |   // Assertions
  178 |   expect(missingSections).toEqual([]);
  179 | 
  180 |   expect(stagingBrokenImages).toEqual([]);
  181 | 
  182 |   expect(liveBrokenImages).toEqual([]);
  183 | 
  184 |   expect(
  185 |     visualResult.mismatchPercentage
> 186 |   ).toBeLessThan(50);
      |     ^ Error: expect(received).toBeLessThan(expected)
  187 | 
  188 |   // Close browser context
  189 |   await context.close();
  190 | });
```