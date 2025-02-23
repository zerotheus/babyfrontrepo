import { Card, Text} from "@chakra-ui/react";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Rectangle, Tooltip } from "recharts";

export const GraphicCard = ({ dadosDoGrafico, titulo,eixoX,eixoY }) => {
  return (
    <Card.Root width="530px">
      <Card.Body gap="2">
        <Text fontSize="2xl" textAlign="center">
          {titulo}
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            title="BPM"
            width={500}
            height={300}
            data={dadosDoGrafico}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={eixoX} />
            <YAxis />
            <Tooltip/>
            <Legend />
            <Bar
              dataKey={eixoY}
              fill="#e43e62"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
      <Card.Footer justifyContent="flex-end"></Card.Footer>
    </Card.Root>
  );
};
