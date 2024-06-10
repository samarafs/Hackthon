export const round2 =  (x: number) => Math.round((x + Number.EPSILON) * 100) / 100

export function convertDocToObj(doc: any) {
    const obj = doc.toObject();
   obj._id = doc._id.toString();
    return obj;
  }