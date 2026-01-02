# Get Started Flow - User Journey Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                 HOMEPAGE                                    │
│                         [Get Started Button]                                │
└────────────────────────────┬────────────────────────────────────────────────┘
                             │
                             ▼
        ┌────────────────────────────────────────┐
        │      /get-started (Landing Page)       │
        │    "Choose Your Journey" Section       │
        └────────────────────────────────────────┘
                             │
            ┌────────────────┴────────────────┐
            │                                 │
            ▼                                 ▼
     ┌─────────────────┐            ┌──────────────────────┐
     │  Learning Card  │            │  Services Card       │
     │  [Book Icon]    │            │  [Briefcase Icon]    │
     └────────┬────────┘            └──────────┬───────────┘
              │                                │
              │ Click                          │ Click
              │                                │
              ▼                                ▼
    ┌──────────────────┐              ┌─────────────────────────────────────┐
    │ Confirmation     │              │  STEP 1: Select Industry (5-Step)   │
    │ Dialog           │              │                                     │
    └────────┬─────────┘              │ [8 Industry Cards]                  │
             │                        │ • Technology & Software             │
             │ Click                  │ • Finance & Banking                 │
             │ "Go to Portal"         │ • Healthcare & Pharma               │
             │                        │ • E-commerce & Retail               │
             ▼                        │ • Education & EdTech                │
    ┌──────────────────┐              │ • Manufacturing & Logistics         │
    │  /student        │              │ • Real Estate & Construction        │
    │  (Innovation Lab │              │ • Media & Entertainment             │
    │   Portal)        │              │                                     │
    └──────────────────┘              │ [Next Button]                       │
                                      └──────────┬──────────────────────────┘
                                                 │
                                                 ▼
                                      ┌──────────────────────────────────┐
                                      │ STEP 2: Select Service (Tech)    │
                                      │                                  │
                                      │ [Service Grid]                   │
                                      │ • Web Development                │
                                      │ • Mobile App Development         │
                                      │ • AI & Machine Learning          │
                                      │ • Cloud Infrastructure           │
                                      │ • DevOps & Deployment            │
                                      │                                  │
                                      │ [Previous] [Next]                │
                                      └──────────┬───────────────────────┘
                                                 │
                                                 ▼
                                      ┌──────────────────────────────────┐
                                      │ STEP 3: Project Details          │
                                      │                                  │
                                      │ [Textarea] Project Description   │
                                      │ [Input] Project Link (Optional)  │
                                      │ [Dynamic] Google Drive Links     │
                                      │ [Dynamic] GitHub Links           │
                                      │                                  │
                                      │ [Previous] [Next]                │
                                      └──────────┬───────────────────────┘
                                                 │
                                                 ▼
                                      ┌──────────────────────────────────┐
                                      │ STEP 4: Contact & Files          │
                                      │                                  │
                                      │ [Input] Email Address (Required) │
                                      │ [Input] Phone (Optional)         │
                                      │ [Upload] Case Studies (5MB Max)  │
                                      │ [Checkbox] Schedule Meeting      │
                                      │                                  │
                                      │ [Previous] [Next]                │
                                      └──────────┬───────────────────────┘
                                                 │
                                                 ▼
                                      ┌──────────────────────────────────┐
                                      │ STEP 5: Review & Submit          │
                                      │                                  │
                                      │ Industry: Technology & Software  │
                                      │ Service: Web Development         │
                                      │ Email: user@email.com            │
                                      │ Meeting: Yes                     │
                                      │                                  │
                                      │ [Previous] [Submit Request]      │
                                      └──────────┬───────────────────────┘
                                                 │
                                                 ▼
                                      ┌──────────────────────────────────┐
                                      │ ✓ Success!                       │
                                      │ Form Submitted                   │
                                      │ Team will contact you shortly    │
                                      └──────────────────────────────────┘
```

## Form Progression Logic

```
START PAGE
  │
  ├─→ Learning Path
  │     └─→ Confirmation Dialog
  │         └─→ /student (Portal)
  │
  └─→ Services Path
      └─→ Step 1: Select Industry ✓
          └─→ Step 2: Select Service ✓
              └─→ Step 3: Project Details ✓
                  └─→ Step 4: Contact & Files ✓
                      └─→ Step 5: Review ✓
                          └─→ SUBMIT ✓
                              └─→ Success Message ✓
```

## File Upload Validation Flow

```
User Selects File
     │
     ▼
Check File Size
     │
     ├─→ > 5MB? ❌ Show Error: "File too large"
     │
     └─→ ≤ 5MB? ✓ Continue
           │
           ▼
      Check File Type
           │
           ├─→ Not (PDF, DOC, DOCX)? ❌ Show Error: "Invalid format"
           │
           └─→ Valid Type? ✓ Upload
                 │
                 ▼
            Show Filename ✓
            (Ready to Submit)
```

## Link Management Flow

```
Add Google Drive Link
     │
     ├─→ [Input Field] [✕ Remove]
     │
     ├─→ [Input Field] [✕ Remove]
     │
     └─→ [+ Add Another Link]

Same for GitHub Links
```

## Step Navigation Flow

```
Step 1  →  [Next Button]  →  Step 2
            (Validation)       │
                               ├─→ [Previous Button]  →  Step 1
                               │
                               └─→ [Next Button]  →  Step 3
                                   (Validation)
```

## Data Validation Rules

```
REQUIRED FIELDS:
├─ Step 1: Industry selected ✓
├─ Step 2: Service selected ✓
├─ Step 3: Project description (min 10 chars) ✓
└─ Step 4: Email address (valid format) ✓

OPTIONAL FIELDS:
├─ Project link (if provided, must be valid URL)
├─ Google Drive links (if provided, must be URLs)
├─ GitHub links (if provided, must be URLs)
├─ Phone number
├─ Case studies (5MB max, PDF/DOC/DOCX)
└─ Schedule meeting (boolean)
```

## User Data Structure

```
formData = {
  selectedIndustry: "tech"              // Step 1
  selectedService: "web-dev"            // Step 2
  projectDescription: "..."             // Step 3
  projectLink: "https://..."            // Step 3
  googleDriveLinks: [                   // Step 3
    "https://drive.google.com/...",
    "https://drive.google.com/..."
  ]
  githubLinks: [                        // Step 3
    "https://github.com/...",
    "https://github.com/..."
  ]
  contactEmail: "user@email.com"        // Step 4
  phone: "+1234567890"                  // Step 4
  caseStudies: File                     // Step 4
  scheduleCall: true                    // Step 4
}
```

## Navbar Integration

```
DESKTOP:
[Logo] [Services ▼] [Products ▼] [...] [Search] [Sign In] [Get Started] ←

MOBILE:
[Logo] [Menu ☰]
         │
         ├─ Services
         ├─ Products
         ├─ Navigation Links
         └─ [Sign In] [Get Started] ← (Bottom)
```

---

## Key User Interactions

| Interaction | Action | Result |
|------------|--------|--------|
| Click "Get Started" | Navigate to /get-started | Landing page shows |
| Click Learning Card | Select learning path | Confirmation dialog |
| Click Services Card | Select services path | Form Step 1 displays |
| Select Industry | Choose from 8 options | Next button enabled |
| Click "Next" | Proceed to next step | Validation runs, moves to Step N+1 |
| Add Link | Click "+ Add Google Drive" | New input field appears |
| Remove Link | Click "✕" on link | Link field removed |
| Upload File | Select file | Validation runs, filename shown |
| Click "Submit" | Complete form | Success message, form resets |

---

## Progress Indicator Visual

```
Step 1  Step 2  Step 3  Step 4  Step 5
  ●       ○       ○       ○       ○     (Initial)
  
  ●       ●       ○       ○       ○     (Step 1 Complete)
  
  ●       ●       ●       ○       ○     (Step 3 Complete)
  
  ●       ●       ●       ●       ●     (Ready to Submit)
  
■ Filled (Complete)  ○ Empty (Pending)
```

---

## Error Handling Flow

```
User Input
     │
     ▼
Validation Check
     │
     ├─→ Invalid? 
     │   └─→ Show Error Message
     │       └─→ Focus on Invalid Field
     │           └─→ User Corrects
     │               └─→ Try Again
     │
     └─→ Valid? ✓
         └─→ Proceed to Next Step
```

---

This visual map shows the complete user journey through the Get Started flow!
