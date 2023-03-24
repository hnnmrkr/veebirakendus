import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
    res.send("Hello " + req.params.nimi)
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});

//Get random number between two inserted parameters
router.get("/random/:arv1/:arv2",(req: Request, res: Response) => {
    const arv1 = Number(req.params.arv1);
    const arv2 = Number(req.params.arv2);
    const random = Math.floor(Math.random() * arv1) + arv2;
    res.send(random.toString());
});

// Get the age from inputs
router.get("/dob/:synnipaev", (req: Request, res: Response) => {
    const year = new Date().getFullYear();
    const dob = Number(req.params.synnipaev);
    const arvuta = year - dob;
    res.send("Sa oled " + arvuta + " aastat vana")
})

export default router;

