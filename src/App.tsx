import { Button, Card, Checkbox, Input, Sheet, Typography } from "@mui/joy";

import ModeIcon from "@mui/icons-material/Mode";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const App = () => {
  return (
    <div className="app">
      <Sheet
        variant="solid"
        sx={{
          padding: "40px 60px",
          borderRadius: "6px",
          minWidth: 600,
        }}
      >
        <Typography
          sx={{
            marginBottom: 3,
            textAlign: "center",
            color: "white",
          }}
          level="h1"
        >
          Todo App
        </Typography>
        <form
          style={{
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "10px",
            }}
          >
            <Input
              color="success"
              placeholder="your todo"
              size="lg"
              variant="soft"
            />
            <Button color="success" variant="soft">
              Add
            </Button>
          </div>
        </form>

        <div className="items">
          <Card
            sx={{
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Checkbox
                color="success"
                label={<span>California, USA</span>}
                variant="soft"
              />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <ModeIcon
                  className="icon"
                  onClick={() => console.log("hi")}
                  color="success"
                ></ModeIcon>
                <RemoveCircleIcon
                  className="icon"
                  onClick={() => console.log("hi")}
                  color="error"
                ></RemoveCircleIcon>
              </div>
            </div>
          </Card>
          <Card
            sx={{
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Checkbox
                color="success"
                label={<span>California, USA</span>}
                variant="soft"
              />
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <ModeIcon
                  className="icon"
                  onClick={() => console.log("hi")}
                  color="success"
                ></ModeIcon>
                <RemoveCircleIcon
                  className="icon"
                  onClick={() => console.log("hi")}
                  color="error"
                ></RemoveCircleIcon>
              </div>
            </div>
          </Card>
        </div>
      </Sheet>
    </div>
  );
};

export default App;
