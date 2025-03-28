import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PostSort({ options,value, onSort }:any) {
  return (
    <Select value={value} onValueChange={onSort}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Latest" />
    </SelectTrigger>
    <SelectContent>
    {options.map((option:any) => ( <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
      ))}
    </SelectContent>
  </Select>
  
  );
}
