import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Component: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-10">
      <div className="space-y-6">
        <div className="bg-muted rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://imgs.search.brave.com/KkU96l5vx155vI4d7iUBZLit2B2TGaeS5GMKlOj6kMU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wb3NpdGUt/aW1hZ2Utd2ViLWNv/dXJzZS1hZF8xMTM0/LTM4ODYxLmpwZz9z/aXplPTYyNiZleHQ9/anBn"
              width={80}
              height={80}
              alt="Course Image"
              className="rounded-lg"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-lg font-medium">
                Web Development Fundamentals
              </h3>
              <p className="text-muted-foreground text-sm">
                Learn the basics of web development, including HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </div>  
          <div>
            <Progress value={75} aria-label="75% complete" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>75% Complete</span>
              <span>12/16 Modules</span>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://imgs.search.brave.com/fQWFtD-024o4oYwHeg4i9mgSAl8P1e-vlY1BeOwVfnA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZGluYXJ5LW1hcmtl/dGluZy1yZXMuY2xv/dWRpbmFyeS5jb20v/aW1hZ2VzL3dfMTAw/MCxjX3NjYWxlL3Yx/NzA4NjQyMTEyL0lt/cG9ydF9JbWFnZXNf/aW5fUmVhY3RfaGVh/ZGVyL0ltcG9ydF9J/bWFnZXNfaW5fUmVh/Y3RfaGVhZGVyLXBu/Zz9faT1BQQ"
              width={80}
              height={80}
              alt="Course Image"
              className="rounded-lg"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-lg font-medium">React Fundamentals</h3>
              <p className="text-muted-foreground text-sm">
                Learn the basics of React, a popular JavaScript library for
                building user interfaces.
              </p>
            </div>
          </div>
          <div>
            <Progress value={50} aria-label="50% complete" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>50% Complete</span>
              <span>8/16 Modules</span>
            </div>
          </div>
        </div>
        <div className="bg-muted rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://imgs.search.brave.com/zv8DAIX1dikR9D5IDCLDDa_400YzQkmHYwp_rak42Sw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/Nzk0MDYxNi9waG90/by9jb25jZXB0dWFs/LTMtbGV0dGVycy1r/ZXl3b3JkLWRzYS1v/bi1tdWx0aWNvbG9y/ZWQtc3RpY2tlcnMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU5qeGItM2RlR3Bf/aE9ZZXY2VFROZGpQ/c0RFMUh6ZlFYYjFu/VTBZUHcxYzg9"
              width={80}
              height={80}
              alt="Course Image"
              className="rounded-lg"
              style={{ aspectRatio: "80/80", objectFit: "cover" }}
            />
            <div>
              <h3 className="text-lg font-medium">Node.js Essentials</h3>
              <p className="text-muted-foreground text-sm">
                Learn the fundamentals of Node.js, a JavaScript runtime for
                building server-side applications.
              </p>
            </div>
          </div>
          <div>
            <Progress value={25} aria-label="25% complete" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>25% Complete</span>
              <span>4/16 Modules</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold">Rewards</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Government Scholarship</CardTitle>
              <CardDescription>
                Eligible for a government-funded scholarship for web development
                courses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Apply for a government scholarship to cover the cost of your web
                development training. This scholarship is available to all
                eligible residents.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Internship Opportunity</CardTitle>
              <CardDescription>
                Gain practical experience through a government-sponsored
                internship.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Explore internship opportunities with local government agencies
                to build your skills and gain real-world experience in web
                development.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Apply Now</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tax Benefits</CardTitle>
              <CardDescription>
                Eligible for tax deductions on web development course expenses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Claim tax deductions for the cost of your web development
                training to reduce your overall tax burden.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Career Counseling</CardTitle>
              <CardDescription>
                Receive personalized guidance on transitioning into a web
                development career.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Access government-provided career counseling services to help
                you navigate the transition into a web development career.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Schedule Appointment</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Component;
