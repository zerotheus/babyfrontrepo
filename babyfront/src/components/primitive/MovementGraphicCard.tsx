import { Button, Card, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Rectangle,
  Tooltip,
  LineChart,
  Line,
} from "recharts";

export const MovementGraphicCard = ({ dadosDoGrafico, titulo, eixoX, eixoY, tipo, legenda }) => {
  const navigate = useNavigate();
  const pregnantId = localStorage.getItem("pregnant");
  return (
    <Card.Root width={"90%"} maxWidth="540px">
      <Card.Body gap="2" justifyContent={"center"} alignItems={"center"}>
        <Text fontSize="2xl" textAlign="center">
          {titulo}
        </Text>
        <ResponsiveContainer width="90%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={dadosDoGrafico}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="eixoX" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={eixoY}
              stroke="#fe6070"
              activeDot={{ r: 8 }}
              name={tipo}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card.Body>

      <Card.Footer justifyContent="center">
        <Button
          size={"lg"}
          variant="outline"
          bg={"#17bcc3"}
          color={"gray.100"}
          width={"200px"}
          onClick={() =>
            navigate(`/PregnantData/${pregnantId}/History/${tipo}`)
          }
        >
          Ver mais
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
