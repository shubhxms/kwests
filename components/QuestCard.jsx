import React from "react";
import { Card, CardHeader, Grid, GridItem, HStack } from "@chakra-ui/react";

function QuestCard(props) {
  let { questTitle } = props;

  return (
    <div className="shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
      <Card
        className="p-3 pb-3 rounded-full w-3/5 mx-auto"
        variant={"flushed"}
        size="sm"
      >
        <Grid>
          <GridItem>
            <CardHeader className="pt-0">
              <HStack spacing={2}>
                <div className="mx-auto">
                  <p>{questTitle}</p>
                </div>
              </HStack>
            </CardHeader>
          </GridItem>
        </Grid>
      </Card>
    </div>
  );
}

export default QuestCard;
